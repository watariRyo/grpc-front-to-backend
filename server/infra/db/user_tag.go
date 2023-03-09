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

// Get(ctx context.Context, input *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error)
// List(tx context.Context, input *pb.ListUserTagRequest) (*pb.ListUserTagResponse, error)
// Insert(ctx context.Context, input *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error)
// Update(ctx context.Context, input *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error)
// Delete(ctx context.Context, input *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse , error)

func (r *UserTagRepository) List(tx context.Context, input *pb.ListUserTagRequest) (*pb.ListUserTagResponse, error) {
	return &pb.ListUserTagResponse{
		UserTagList: []*pb.UserTagResponse{},
	}, nil
}

func (r *UserTagRepository) Get(ctx context.Context, input *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error) {
	return &pb.GetUserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Insert(ctx context.Context, input *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error) {
	return &pb.RegisterUserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Update(ctx context.Context, input *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error) {
	return &pb.UpdateUserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Delete(ctx context.Context, input *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse , error) {
	return &pb.DeleteUserTagResponse{
		Id: 1,
		UserId: "uuid-dummy",
	}, nil
}

