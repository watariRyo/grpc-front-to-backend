package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepository struct {}

var _ repository.UserRepository = (*UserRepository)(nil)

func NewUserRepository() *UserRepository {
	return &UserRepository{}
}

func (r *UserRepository) Get(ctx context.Context, input *pb.UserID) (*pb.UserResponse, error) {
	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (r *UserRepository) Upsert(ctx context.Context, input *pb.UserRequest) (*pb.UserResponse, error) {
	return &pb.UserResponse{
		UserId: "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (r *UserRepository) Delete(ctx context.Context, input *pb.UserID) (*pb.UserID , error) {
	return &pb.UserID{
		UserId: "uuid-dummy",
	}, nil
}
