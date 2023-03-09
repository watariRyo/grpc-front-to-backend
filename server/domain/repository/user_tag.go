package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type UserTagRepository interface {
	Get(ctx context.Context, input *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error)
	List(tx context.Context, input *pb.ListUserTagRequest) (*pb.ListUserTagResponse, error)
	Insert(ctx context.Context, input *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error)
	Update(ctx context.Context, input *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error)
	Delete(ctx context.Context, input *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse , error)
}