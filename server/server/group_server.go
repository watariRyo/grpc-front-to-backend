package server

import (
	"context"
	"log"

	pb "github.com/watariRyo/balance/server/proto"
)

func (s *GroupServer) ListGroup(ctx context.Context, request *pb.GroupListRequest) (*pb.GroupListResponse, error) {
	log.Println("ListGroup was invoked.")

	return &pb.GroupListResponse{
		GroupList: []*pb.GroupResponse{},
	}, nil
}

func (s *GroupServer) GetGroup(ctx context.Context, groupID *pb.GroupID) (*pb.GroupResponse, error) {
	log.Println("GetGroup was invoked.")

	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *GroupServer) RegisterGroup(ctx context.Context, request *pb.GroupRequest) (*pb.GroupResponse, error) {
	log.Println("RegisterUserTag was invoked.")

	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *GroupServer) UpdateGroup(ctx context.Context, request *pb.GroupRequest) (*pb.GroupResponse, error) {
	log.Println("UpdateUserTag was invoked.")

	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *GroupServer) DeleteGroup(ctx context.Context, groupID *pb.GroupID) (*pb.GroupID, error) {
	log.Println("DeleteGroup was invoked.")

	return &pb.GroupID{
		Id: 1,	
	}, nil
}