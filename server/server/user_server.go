package server

import (
	"context"
	"log"

	pb "github.com/watariRyo/balance/server/proto"
)

func (s *UserServer) GetUser(ctx context.Context, userID *pb.UserID) (*pb.UserResponse, error) {
	log.Println("GetUser was invoked.")

	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (s *UserServer) RegisterUser(ctx context.Context, request *pb.UserRequest) (*pb.UserResponse, error) {
	log.Println("RegisterUser was invoked.")

	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (s *UserServer) UpdateUser(ctx context.Context, request *pb.UserRequest) (*pb.UserResponse, error) {
	log.Println("UpdateUser was invoked.")

	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (s *UserServer) DeleteUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("DeleteUser was invoked.")

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}

func (s *UserServer) LogoutUser(ctx context.Context, userID *pb.UserID) (*pb.UserID, error) {
	log.Println("LogoutUser was invoked.")

	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}