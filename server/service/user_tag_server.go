package service

import (
	"context"
	"log"
	"time"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/logger"
	"github.com/watariRyo/balance/server/messages"
	pb "github.com/watariRyo/balance/server/proto"
	ltime "github.com/watariRyo/balance/server/time"
	"github.com/watariRyo/balance/server/token"
)

func NewUserTagService(r *repository.AllRepository, cfg *config.Config, tokenMaker token.Maker) *userTagService {
	t := ltime.NewRealClock(*time.Local)

	return &userTagService{
		repo:       r,
		cfg:        cfg,
		tokenMaker: tokenMaker,
		time:       t,
	}
}

func (s *userTagService) ListUserTag(ctx context.Context, request *pb.ListUserTagRequest) (*pb.ListUserTagResponse, error) {
	sessionData, err := s.repo.RedisClient.GetSession(request.SessionId)
	if err != nil {
		logger.Errorf(ctx, "something went wrong. %v.", err)
		return nil, messages.SessionError(err.Error()).Err()
	}
	userTags, err := s.repo.UserTagRepository.List(ctx, s.repo.DBConnection, sessionData.UserID)

	var userTagsResponse []*pb.UserTagResponse
	for _, userTag := range userTags {
		userTagsResponse = append(userTagsResponse, &pb.UserTagResponse{
			Id:         userTag.ID,
			UserId:     userTag.UserID,
			TagName:    userTag.TagName,
			HasGroup:   userTag.HasGroup,
			GroupId:    userTag.GroupID,
			GrantLimit: userTag.GrantLimit,
		})
	}

	return &pb.ListUserTagResponse{
		UserTagList: userTagsResponse,
	}, nil
}

func (s *userTagService) GetUserTag(ctx context.Context, userTagID *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error) {
	log.Println("GetUserTag was invoked.")

	return &pb.GetUserTagResponse{
		Id:         1,
		UserId:     "dummy-uuid",
		TagName:    "dummy-tag",
		HasGroup:   true,
		GroupId:    1,
		GrantLimit: "INCOME",
	}, nil
}

func (s *userTagService) RegisterUserTag(ctx context.Context, request *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error) {
	log.Println("RegisterUserTag was invoked.")

	return &pb.RegisterUserTagResponse{
		Id:         1,
		UserId:     "dummy-uuid",
		TagName:    "dummy-tag",
		HasGroup:   true,
		GroupId:    1,
		GrantLimit: "INCOME",
	}, nil
}

func (s *userTagService) UpdateUserTag(ctx context.Context, request *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error) {
	log.Println("UpdateUserTag was invoked.")

	return &pb.UpdateUserTagResponse{
		Id:         1,
		UserId:     "dummy-uuid",
		TagName:    "dummy-tag",
		HasGroup:   true,
		GroupId:    1,
		GrantLimit: "INCOME",
	}, nil
}

func (s *userTagService) DeleteUserTag(ctx context.Context, groupID *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse, error) {
	log.Println("DeleteGroup was invoked.")

	return &pb.DeleteUserTagResponse{
		Id:     1,
		UserId: "dummy-uuid",
	}, nil
}
