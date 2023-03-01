package service

import (
	"context"
	"log"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

func NewUserTagService(r repository.AllRepository) *userTagService {
	return &userTagService{
		AllRepository: r,
	}
}

func (s *userTagService) ListUserTag(ctx context.Context, request *pb.UserTagListRequest) (*pb.UserTagListResponse, error) {
	log.Println("ListUserTag was invoked.")

	return &pb.UserTagListResponse{
		UserTagList: []*pb.UserTagResponse{},
	}, nil
}

func (s *userTagService) GetUserTag(ctx context.Context, userTagID *pb.UserTagID) (*pb.UserTagResponse, error) {
	log.Println("GetUserTag was invoked.")

	return &pb.UserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (s *userTagService) RegisterUserTag(ctx context.Context, request *pb.UserTagRequest) (*pb.UserTagResponse, error) {
	log.Println("RegisterUserTag was invoked.")

	return &pb.UserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (s *userTagService) UpdateUserTag(ctx context.Context, request *pb.UserTagRequest) (*pb.UserTagResponse, error) {
	log.Println("UpdateUserTag was invoked.")

	return &pb.UserTagResponse{
		Id: 1,
		UserId: "dummy-uuid",
		TagName: "dummy-tag",
		HasGroup: true,
		GroupId: 1,
		GrantLimit: "INCOME",
	}, nil
}

func (s *userTagService) DeleteUserTag(ctx context.Context, groupID *pb.UserTagID) (*pb.UserTagID, error) {
	log.Println("DeleteGroup was invoked.")

	return &pb.UserTagID{
		Id: 1,
		UserId: "dummy-uuid",
	}, nil
}