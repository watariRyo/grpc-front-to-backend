package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type TagGroupRepository interface {
	Get(ctx context.Context, input *pb.GetGroupRequest) (*pb.GetGroupResponse, error)
	List(tx context.Context, input *pb.ListGroupRequest) (*pb.ListGroupResponse, error)
	Insert(ctx context.Context, input *pb.RegisterGroupRequest) (*pb.RegisterGroupResponse, error)
	Update(ctx context.Context, input *pb.UpdateGroupRequest) (*pb.UpdateGroupResponse, error)
	Delete(ctx context.Context, input *pb.DeleteGroupRequest) (*pb.DeleteGroupResponse, error)
}
