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
		AllRepository: r,
		Config: cfg,
		TokenMaker: tokenMaker,
		Time: t,
	}
}

func (s *groupService) ListGroup(ctx context.Context, request *pb.GroupListRequest) (*pb.GroupListResponse, error) {
	log.Println("ListGroup was invoked.")

	return &pb.GroupListResponse{
		GroupList: []*pb.GroupResponse{},
	}, nil
}

func (s *groupService) GetGroup(ctx context.Context, groupID *pb.GroupID) (*pb.GroupResponse, error) {
	log.Println("GetGroup was invoked.")

	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *groupService) RegisterGroup(ctx context.Context, request *pb.GroupRequest) (*pb.GroupResponse, error) {
	log.Println("RegisterUserTag was invoked.")

	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *groupService) UpdateGroup(ctx context.Context, request *pb.GroupRequest) (*pb.GroupResponse, error) {
	log.Println("UpdateUserTag was invoked.")

	return &pb.GroupResponse{
		Id: 1,
		UserId: "dummy-uuid",
		GroupName: "dummy-group",		
	}, nil
}

func (s *groupService) DeleteGroup(ctx context.Context, groupID *pb.GroupID) (*pb.GroupID, error) {
	log.Println("DeleteGroup was invoked.")

	return &pb.GroupID{
		Id: 1,	
	}, nil
}