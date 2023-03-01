package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type UserTagRepository interface {
	Get(ctx context.Context, input *pb.UserTagID) (*pb.UserTagResponse, error)
	List(tx context.Context, input *pb.UserTagListRequest) (*pb.UserTagListResponse, error)
	Upsert(ctx context.Context, input *pb.UserTagRequest) (*pb.UserTagResponse, error)
	Delete(ctx context.Context, input *pb.UserTagID) (*pb.UserTagID , error)
}