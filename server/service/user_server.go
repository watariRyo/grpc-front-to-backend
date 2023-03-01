package service

import (
	"context"
	"log"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
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

func (s *userService) RegisterUser(ctx context.Context, request *pb.UserRequest) (*pb.UserResponse, error) {
	log.Println("RegisterUser was invoked.")

	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
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

func (s *userService) LogoutUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("LogoutUser was invoked.")

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}