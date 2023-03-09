package repository

import (
	"context"

	"github.com/watariRyo/balance/server/domain/model"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepository interface {
	Get(ctx context.Context, input *pb.GetUserRequest) (*pb.GetUserResponse, error)
	Insert(ctx context.Context, input *pb.RegisterUserRequest) (*model.User, error)
	Update(ctx context.Context, input *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error)
	Delete(ctx context.Context, input *pb.DeleteUserRequest) (*pb.DeleteUserResponse , error)
}