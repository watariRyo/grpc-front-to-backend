package service

import (
	"context"
	"log"
	"time"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/messages"
	pb "github.com/watariRyo/balance/server/proto"
	"github.com/watariRyo/balance/server/token"
	"github.com/watariRyo/balance/server/util"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func NewUserService(r *repository.AllRepository, cfg *config.Config, tokenMaker token.Maker) *userService {
	return &userService{
		AllRepository: r,
		Config: cfg,
		TokenMaker: tokenMaker,
	}
}

func (s *userService) GetUser(ctx context.Context, userID *pb.UserID) (*pb.UserResponse, error) {
	log.Println("GetUser was invoked.")

	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (s *userService) RegisterUser(ctx context.Context, request *pb.UserRequest) (*pb.LoginResponse, error) {
	log.Println("RegisterUser was invoked.")
	// create user
	hashedPassword, err := util.HashPassword(request.Password)
	if err != nil {
		return nil, messages.FailedMakePasswordHash().Err()
	}
	println("password: " + hashedPassword)

	// token生成
	token, err := s.TokenMaker.CreateToken(request.UserId, s.Config.Secret.AccessTokenDuration)
	if err != nil {
		return nil, messages.CreateTokenError().Err()
	}

	// TODO セッション（Redis）格納

	return &pb.LoginResponse{
		UserId: "uuid-dummy",
		SessionId: "Dummy",
		AccessToken: token,
		RefreshToken: "jwt",
		AccessTokenExpiresAt: timestamppb.New(time.Now()),
		RefreshTokenExpiresAt: timestamppb.New(time.Now()),
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

	// TODO login処理

	// password mismatch
	if err := util.CheckPassword(request.Password, "user.password"); err != nil {
		return nil, messages.PasswordMismatch().Err()
	}

	// TODO token生成
	accessToken, err := s.TokenMaker.CreateToken(request.UserId, s.Config.Secret.AccessTokenDuration)
	if err != nil {
		return nil, messages.CreateTokenError().Err()
	}

	// TODO セッション（Redis）格納

	return &pb.LoginResponse{
		SessionId: "Dummy",
		AccessToken: accessToken,
		RefreshToken: "jwt",
		AccessTokenExpiresAt: timestamppb.New(time.Now()),
		RefreshTokenExpiresAt: timestamppb.New(time.Now().Add(s.Secret.AccessTokenDuration)),
	}, nil
}

func (s *userService) LogoutUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("LogoutUser was invoked.")

	// TODO セッション除去

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}