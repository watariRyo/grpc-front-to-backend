package service

import (
	"context"
	"time"

	"github.com/google/uuid"
	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/logger"
	"github.com/watariRyo/balance/server/messages"
	pb "github.com/watariRyo/balance/server/proto"
	ltime "github.com/watariRyo/balance/server/time"
	"github.com/watariRyo/balance/server/token"
	"github.com/watariRyo/balance/server/util"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func NewUserService(r *repository.AllRepository, cfg *config.Config, tokenMaker token.Maker) *userService {
	t := ltime.NewRealClock(*time.Local)

	return &userService{
		repo:       r,
		cfg:        cfg,
		tokenMaker: tokenMaker,
		time:       t,
	}
}

func (s *userService) GetUser(ctx context.Context, request *pb.GetUserRequest) (*pb.GetUserResponse, error) {

	// セッション（Redis）取得
	sessionData, err := s.repo.RedisClient.GetSession(request.SessionId)
	if err != nil {
		logger.Errorf(ctx, "something went wrong. %v.", err)
		return nil, messages.SessionError(err.Error()).Err()
	}

	return &pb.GetUserResponse{
		UserId:           sessionData.UserID,
		IsPrivacyChecked: true,
	}, nil
}

func (s *userService) RegisterUser(ctx context.Context, request *pb.RegisterUserRequest) (*pb.RegisterUserResponse, error) {
	// create user
	hashPassword, err := util.HashPassword(request.Password)
	if err != nil {
		logger.Errorf(ctx, "something went wrong. %v. user_id: %s", err, request.UserId)
		return nil, messages.FailedMakePasswordHash().Err()
	}

	// sessionとtoken処理
	accessToken, refreshToken, accessTokenPayload, refreshTokenPayload, sessionID, err := s.setSessionAndToken(ctx, request.UserId)
	if err != nil {
		return nil, err
	}

	accessTokenDuration := accessTokenPayload.ExpiredAt.Sub(s.time.Now())
	refreshTokenDuration := refreshTokenPayload.ExpiredAt.Sub(s.time.Now())

	if err = s.repo.DBTransaction(ctx, s.repo.DBConnection, func(ctx context.Context, conn repository.DBConnection) error {
		request.Password = hashPassword

		// user作成
		user, err := s.repo.UserRepository.Insert(ctx, conn, request)
		if err != nil {
			logger.Errorf(ctx, "something went wrong DB. %v. user_id: %s", err, request.UserId)
			return messages.InternalDBError().Err()
		}

		// デフォルトのタグをadmin_tagから作成する
		err = s.repo.UserTagRepository.InitInsert(ctx, conn, user.UserID)
		if err != nil {

		}

		return nil
	}, nil); err != nil {
		return nil, err
	}

	return &pb.RegisterUserResponse{
		UserId:                request.UserId,
		SessionId:             sessionID,
		AccessToken:           accessToken,
		RefreshToken:          refreshToken,
		AccessTokenExpiresAt:  timestamppb.New(s.time.Now().Add(accessTokenDuration)),  //TODO get token expires_at
		RefreshTokenExpiresAt: timestamppb.New(s.time.Now().Add(refreshTokenDuration)), //TODO get token expires_at
	}, nil
}

func (s *userService) UpdateUser(ctx context.Context, request *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {

	return &pb.UpdateUserResponse{
		UserId:           "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (s *userService) DeleteUser(ctx context.Context, userID *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {

	return &pb.DeleteUserResponse{
		UserId: "uuid-dummy",
	}, nil
}

func (s *userService) LoginUser(ctx context.Context, request *pb.LoginUserRequest) (*pb.LoginUserResponse, error) {
	logger.Infof(ctx, "LoginUser was invoked. userId: %s", request.UserId)

	user, err := s.repo.UserRepository.Login(ctx, s.repo.DBConnection, request)
	if err != nil {
		logger.Errorf(ctx, "something went wrong DB. %v. user_id: %s", err, request.UserId)
		return nil, messages.GetNoData().Err()
	}

	// password mismatch
	if err := util.CheckPassword(request.Password, user.Password); err != nil {
		return nil, messages.PasswordMismatch().Err()
	}

	// sessionとtoken処理
	accessToken, refreshToken, accessTokenPayload, refreshTokenPayload, sessionID, err := s.setSessionAndToken(ctx, request.UserId)
	if err != nil {
		return nil, err
	}
	accessTokenDuration := accessTokenPayload.ExpiredAt.Sub(s.time.Now())
	refreshTokenDuration := refreshTokenPayload.ExpiredAt.Sub(s.time.Now())

	return &pb.LoginUserResponse{
		UserId:                user.UserID,
		SessionId:             sessionID,
		AccessToken:           accessToken,
		RefreshToken:          refreshToken,
		AccessTokenExpiresAt:  timestamppb.New(s.time.Now().Add(accessTokenDuration)),  //TODO get token expires_at
		RefreshTokenExpiresAt: timestamppb.New(s.time.Now().Add(refreshTokenDuration)), //TODO get token expires_at
	}, nil
}

func (s *userService) LogoutUser(ctx context.Context, request *pb.LogoutUserRequest) (*pb.LogoutUserResponse, error) {

	// セッション（Redis）取得
	err := s.repo.RedisClient.DeleteSession(request.SessionId)
	if err != nil {
		logger.Errorf(ctx, "something went wrong. %v.", err)
		return nil, messages.SessionError(err.Error()).Err()
	}

	return &pb.LogoutUserResponse{}, nil
}

func (s *userService) setSessionAndToken(ctx context.Context, userID string) (string, string, *model.Payload, *model.Payload, string, error) {
	// token生成
	accessToken, err := s.tokenMaker.CreateToken(userID, s.cfg.Secret.AccessTokenDuration)
	if err != nil {
		logger.Errorf(ctx, "%v. user_id: %s", err, userID)
		return "", "", nil, nil, "", messages.CreateTokenError().Err()
	}
	refreshToken, err := s.tokenMaker.CreateToken(userID, s.cfg.Secret.RefreshTokenDuration)
	if err != nil {
		logger.Errorf(ctx, "%v. user_id: %s", err, userID)
		return "", "", nil, nil, "", messages.CreateTokenError().Err()
	}

	accessTokenPayload, err := s.tokenMaker.VerifyToken(accessToken)
	refreshTokenPayload, err := s.tokenMaker.VerifyToken(refreshToken)
	refreshTokenDuration := refreshTokenPayload.ExpiredAt.Sub(s.time.Now())

	// セッション（Redis）格納
	sessionID := uuid.NewString()
	err = s.repo.RedisClient.SaveSession(sessionID, model.SessionData{UserID: userID}, refreshTokenDuration)
	if err != nil {
		logger.Errorf(ctx, "%v. user_id: %s", err, userID)
		return "", "", nil, nil, "", messages.SessionError(err.Error()).Err()
	}
	// Cookieセット
	// cookie.SetCookie(ctx, sessionID)

	return accessToken, refreshToken, accessTokenPayload, refreshTokenPayload, sessionID, nil
}
