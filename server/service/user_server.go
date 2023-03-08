package service

import (
	"context"
	"log"
	"time"

	"github.com/google/uuid"
	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/cookie"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
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
		repo: r,
		cfg: cfg,
		tokenMaker: tokenMaker,
		time: t,
	}
}

func (s *userService) GetUser(ctx context.Context, userID *pb.UserID) (*pb.UserResponse, error) {
	log.Println("GetUser was invoked.")

	// Cookies取得
	sessionID, err := cookie.ParseMetadataCookieSessionID(ctx)
	if err != nil {
		return nil, messages.CookieError(err.Error()).Err()
	}

	// セッション（Redis）取得
	sessionData, err := s.repo.RedisClient.GetSession(sessionID)
	if err != nil {
		return nil, messages.SessionError(err.Error()).Err()
	}

	return &pb.UserResponse{
		UserId: sessionData,
		IsPrivacyChecked: true,
	}, nil
}

func (s *userService) RegisterUser(ctx context.Context, request *pb.UserRequest) (*pb.LoginResponse, error) {
	log.Println("RegisterUser was invoked.")
	// create user
	_, err := util.HashPassword(request.Password)
	if err != nil {
		return nil, messages.FailedMakePasswordHash().Err()
	}

	// sessionとtoken処理
	accessToken, refreshToken, accessTokenPayload, refreshTokenPayload, err := s.setSessionAndToken(ctx, request.UserId)
	if err != nil {
		return nil, err
	}

	accessTokenDuration := accessTokenPayload.ExpiredAt.Sub(s.time.Now())
	refreshTokenDuration := refreshTokenPayload.ExpiredAt.Sub(s.time.Now())

	return &pb.LoginResponse{
		SessionId: "Dummy",
		AccessToken: accessToken,
		RefreshToken: refreshToken,
		AccessTokenExpiresAt: timestamppb.New(s.time.Now().Add(accessTokenDuration)), //TODO get token expires_at
		RefreshTokenExpiresAt: timestamppb.New(s.time.Now().Add(refreshTokenDuration)), //TODO get token expires_at
	}, nil
}

func (s *userService) UpdateUser(ctx context.Context, request *pb.UserRequest) (*pb.UserResponse, error) {
	log.Println("UpdateUser was invoked.")

	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (s *userService) DeleteUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("DeleteUser was invoked.")

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}

func (s *userService) LoginUser(ctx context.Context, request *pb.UserRequest) (*pb.LoginResponse, error) {
	log.Println("LoginUser was invoked.")

	// password mismatch
	if err := util.CheckPassword(request.Password, "user.password"); err != nil {
		return nil, messages.PasswordMismatch().Err()
	}

	// sessionとtoken処理
	accessToken, refreshToken, accessTokenPayload, refreshTokenPayload, err := s.setSessionAndToken(ctx, request.UserId)
	if err != nil {
		return nil, err
	}
	accessTokenDuration := accessTokenPayload.ExpiredAt.Sub(s.time.Now())
	refreshTokenDuration := refreshTokenPayload.ExpiredAt.Sub(s.time.Now())

	return &pb.LoginResponse{
		SessionId: "Dummy",
		AccessToken: accessToken,
		RefreshToken: refreshToken,
		AccessTokenExpiresAt: timestamppb.New(s.time.Now().Add(accessTokenDuration)), //TODO get token expires_at
		RefreshTokenExpiresAt: timestamppb.New(s.time.Now().Add(refreshTokenDuration)), //TODO get token expires_at
	}, nil
}

func (s *userService) LogoutUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("LogoutUser was invoked.")

	// TODO セッション除去

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}

func (s *userService) setSessionAndToken(ctx context.Context, userID string) (string, string, *model.Payload, *model.Payload, error) {
	// token生成
	accessToken, err := s.tokenMaker.CreateToken(userID, s.cfg.Secret.AccessTokenDuration)
	if err != nil {
		return "", "", nil, nil, messages.CreateTokenError().Err()
	}
	refreshToken, err := s.tokenMaker.CreateToken(userID, s.cfg.Secret.RefreshTokenDuration)
	if err != nil {
		return "", "", nil, nil, messages.CreateTokenError().Err()
	}

	accessTokenPayload, err := s.tokenMaker.VerifyToken(accessToken)
	refreshTokenPayload, err := s.tokenMaker.VerifyToken(refreshToken)
	refreshTokenDuration := refreshTokenPayload.ExpiredAt.Sub(s.time.Now())

	// セッション（Redis）格納
	sessionID := uuid.NewString()
	err = s.repo.RedisClient.SaveSession(sessionID, model.SessionData{UserID: userID}, refreshTokenDuration)
	if err != nil {
		println(err.Error())
		return "", "", nil, nil, messages.SessionError(err.Error()).Err()
	}
	// Cookieセット
	cookie.SetCookie(ctx, sessionID)

	return accessToken,  refreshToken, accessTokenPayload, refreshTokenPayload, nil
}