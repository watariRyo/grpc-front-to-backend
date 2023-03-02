package service

import (
	"context"
	"log"
	"time"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func NewUserService(r repository.AllRepository) *userService {
	return &userService{
		AllRepository: r,
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
	// TODO パスワードハッシュutil

	// token生成

	// TODO セッション（Redis）格納

	return &pb.LoginResponse{
		UserId: "uuid-dummy",
		SessionId: "Dummy",
		AccessToken: "jwt",
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

	// TODO token生成

	// TODO セッション（Redis）格納

	return &pb.LoginResponse{
		SessionId: "Dummy",
		AccessToken: "jwt",
		RefreshToken: "jwt",
		AccessTokenExpiresAt: timestamppb.New(time.Now()),
		RefreshTokenExpiresAt: timestamppb.New(time.Now()),
	}, nil
}

func (s *userService) LogoutUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("LogoutUser was invoked.")

	// TODO セッション除去

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}