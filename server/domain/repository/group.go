package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type GroupRepository interface {
	Get(ctx context.Context, input *pb.GroupID) (*pb.GroupResponse, error)
	List(tx context.Context, input *pb.GroupListRequest) (*pb.GroupListResponse, error)
	Upsert(ctx context.Context, input *pb.GroupRequest) (*pb.GroupResponse, error)
	Delete(ctx context.Context, input *pb.GroupID) (*pb.GroupID , error)
}