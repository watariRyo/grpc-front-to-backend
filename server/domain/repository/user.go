package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepository interface {
	Get(ctx context.Context, input *pb.UserID) (*pb.UserResponse, error)
	Upsert(ctx context.Context, input *pb.UserRequest) (*pb.UserResponse, error)
	Delete(ctx context.Context, input *pb.UserID) (*pb.UserID , error)
}