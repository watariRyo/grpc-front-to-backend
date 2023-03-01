package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserTagRepository struct {}

var _ repository.UserTagRepository = (*UserTagRepository)(nil)

func NewUserTagRepository() *UserTagRepository {
	return &UserTagRepository{}
}

func (r *UserTagRepository) List(ctx context.Context, input *pb.UserTagListRequest) (*pb.UserTagListResponse, error) {
	return &pb.UserTagListResponse{
		UserTagList: []*pb.UserTagResponse{},
	}, nil
}

func (r *UserTagRepository) Get(ctx context.Context, input *pb.UserTagID) (*pb.UserTagResponse, error) {
	return &pb.UserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Upsert(ctx context.Context, input *pb.UserTagRequest) (*pb.UserTagResponse, error) {
	return &pb.UserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Delete(ctx context.Context, input *pb.UserTagID) (*pb.UserTagID , error) {
	return &pb.UserTagID{
		Id: 1,
		UserId: "uuid-dummy",
	}, nil
}

