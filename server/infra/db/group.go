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

func (r *GroupRepository) List(tx context.Context, input *pb.ListGroupRequest) (*pb.ListGroupResponse, error) {
	return &pb.ListGroupResponse{
		GroupList: []*pb.GroupResponse{},
	}, nil
}

func (r *GroupRepository) Get(ctx context.Context, input *pb.GetGroupRequest) (*pb.GetGroupResponse, error) {
	return &pb.GetGroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (r *GroupRepository) Insert(ctx context.Context, input *pb.RegisterGroupRequest) (*pb.RegisterGroupResponse, error) {
	return &pb.RegisterGroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (r *GroupRepository) Update(ctx context.Context, input *pb.UpdateGroupRequest) (*pb.UpdateGroupResponse, error) {
	return &pb.UpdateGroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (r *GroupRepository) Delete(ctx context.Context, input *pb.DeleteGroupRequest) (*pb.DeleteGroupResponse , error) {
	return &pb.DeleteGroupResponse{
		Id: 1,	
	}, nil
}

