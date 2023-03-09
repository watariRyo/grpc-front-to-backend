package service

import (
	"context"
	"log"
	"time"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
	ltime "github.com/watariRyo/balance/server/time"
	"github.com/watariRyo/balance/server/token"
)

func NewGroupService(r *repository.AllRepository, cfg *config.Config, tokenMaker token.Maker) *groupService {
	t := ltime.NewRealClock(*time.Local)

	return &groupService{
		repo: r,
		cfg: cfg,
		tokenMaker: tokenMaker,
		time: t,
	}
}

func (s *groupService) ListGroup(ctx context.Context, request *pb.ListGroupRequest) (*pb.ListGroupResponse, error) {
	log.Println("ListGroup was invoked.")

	return &pb.ListGroupResponse{
		GroupList: []*pb.GroupResponse{},
	}, nil
}

func (s *groupService) GetGroup(ctx context.Context, groupID *pb.GetGroupRequest) (*pb.GetGroupResponse, error) {
	log.Println("GetGroup was invoked.")

	return &pb.GetGroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *groupService) RegisterGroup(ctx context.Context, request *pb.RegisterGroupRequest) (*pb.RegisterGroupResponse, error) {
	log.Println("RegisterUserTag was invoked.")

	return &pb.RegisterGroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *groupService) UpdateGroup(ctx context.Context, request *pb.UpdateGroupRequest) (*pb.UpdateGroupResponse, error) {
	log.Println("UpdateUserTag was invoked.")

	return &pb.UpdateGroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *groupService) DeleteGroup(ctx context.Context, groupID *pb.DeleteGroupRequest) (*pb.DeleteGroupResponse, error) {
	log.Println("DeleteGroup was invoked.")

	return &pb.DeleteGroupResponse{
		Id: 1,	
	}, nil
}