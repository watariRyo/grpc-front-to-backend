package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepository struct {}

var _ repository.UserRepository = (*UserRepository)(nil)

func NewUserRepository() *UserRepository {
	return &UserRepository{}
}

// Get(ctx context.Context, input *pb.GetUserRequest) (*pb.GetUserResponse, error)
// Insert(ctx context.Context, input *pb.RegisterUserRequest) (*pb.RegisterUserResponse, error)
// Update(ctx context.Context, input *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error)
// Delete(ctx context.Context, input *pb.DeleteUserRequest) (*pb.DeleteUserResponse , error)

func (r *UserRepository) Get(ctx context.Context, input *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	return &pb.GetUserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (r *UserRepository) Insert(ctx context.Context, input *pb.RegisterUserRequest) (*model.User, error) {
	return &model.User{
		UserId: "uuid-dummy",
	}, nil
}

func (r *UserRepository) Update(ctx context.Context, input *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	return &pb.UpdateUserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (r *UserRepository) Delete(ctx context.Context, input *pb.DeleteUserRequest) (*pb.DeleteUserResponse , error) {
	return &pb.DeleteUserResponse{
		UserId: "uuid-dummy",
	}, nil
}
