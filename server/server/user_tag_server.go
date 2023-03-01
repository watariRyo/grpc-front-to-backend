package server

import (
	"context"
	"log"

	pb "github.com/watariRyo/balance/server/proto"
)

func (s *UserTagServer) ListUserTag(ctx context.Context, request *pb.UserTagListRequest) (*pb.UserTagListResponse, error) {
	log.Println("ListUserTag was invoked.")

	return &pb.UserTagListResponse{
		UserTagList: []*pb.UserTagResponse{},
	}, nil
}

func (s *UserTagServer) GetUserTag(ctx context.Context, userTagID *pb.UserTagID) (*pb.UserTagResponse, error) {
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

func (s *UserTagServer) RegisterUserTag(ctx context.Context, request *pb.UserTagRequest) (*pb.UserTagResponse, error) {
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

func (s *UserTagServer) UpdateUserTag(ctx context.Context, request *pb.UserTagRequest) (*pb.UserTagResponse, error) {
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

func (s *UserTagServer) DeleteUserTag(ctx context.Context, groupID *pb.UserTagID) (*pb.UserTagID, error) {
	log.Println("DeleteGroup was invoked.")

	return &pb.UserTagID{
		Id: 1,
		UserId: "dummy-uuid",
	}, nil
}