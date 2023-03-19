package repository

import (
	"context"

	"github.com/watariRyo/balance/server/domain/model"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepository interface {
	Get(ctx context.Context, conn DBConnection, input *pb.GetUserRequest) (*pb.GetUserResponse, error)
	Login(ctx context.Context, conn DBConnection, input *pb.LoginUserRequest) (*model.User, error)
	Insert(ctx context.Context, conn DBConnection, input *pb.RegisterUserRequest) (*model.User, error)
	Update(ctx context.Context, conn DBConnection, input *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error)
	Delete(ctx context.Context, conn DBConnection, input *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error)
}
