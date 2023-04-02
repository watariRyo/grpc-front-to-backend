package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type TagGroupRepository struct{}

var _ repository.TagGroupRepository = (*TagGroupRepository)(nil)

func NewTagGroupRepository() *TagGroupRepository {
	return &TagGroupRepository{}
}

func (r *TagGroupRepository) List(tx context.Context, input *pb.ListGroupRequest) (*pb.ListGroupResponse, error) {
	return &pb.ListGroupResponse{
		GroupList: []*pb.GroupResponse{},
	}, nil
}

func (r *TagGroupRepository) Get(ctx context.Context, input *pb.GetGroupRequest) (*pb.GetGroupResponse, error) {
	return &pb.GetGroupResponse{
		Id:        1,
		UserId:    "dummy-uuid",
		GroupName: "dummy-group",
	}, nil
}

func (r *TagGroupRepository) Insert(ctx context.Context, input *pb.RegisterGroupRequest) (*pb.RegisterGroupResponse, error) {
	return &pb.RegisterGroupResponse{
		Id:        1,
		UserId:    "dummy-uuid",
		GroupName: "dummy-group",
	}, nil
}

func (r *TagGroupRepository) Update(ctx context.Context, input *pb.UpdateGroupRequest) (*pb.UpdateGroupResponse, error) {
	return &pb.UpdateGroupResponse{
		Id:        1,
		UserId:    "dummy-uuid",
		GroupName: "dummy-group",
	}, nil
}

func (r *TagGroupRepository) Delete(ctx context.Context, input *pb.DeleteGroupRequest) (*pb.DeleteGroupResponse, error) {
	return &pb.DeleteGroupResponse{
		Id: 1,
	}, nil
}
