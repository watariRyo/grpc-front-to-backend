package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type GroupRepository struct {}

var _ repository.GroupRepository = (*GroupRepository)(nil)

func NewGroupRepository() *GroupRepository {
	return &GroupRepository{}
}

func (r *GroupRepository) List(ctx context.Context, input *pb.GroupListRequest) (*pb.GroupListResponse, error) {
	return &pb.GroupListResponse{
		GroupList: []*pb.GroupResponse{},
	}, nil
}

func (r *GroupRepository) Get(ctx context.Context, input *pb.GroupID) (*pb.GroupResponse, error) {
	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (r *GroupRepository) Upsert(ctx context.Context, input *pb.GroupRequest) (*pb.GroupResponse, error) {
	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (r *GroupRepository) Delete(ctx context.Context, input *pb.GroupID) (*pb.GroupID , error) {
	return &pb.GroupID{
		Id: 1,	
	}, nil
}

