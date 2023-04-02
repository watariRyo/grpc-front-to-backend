package db

import (
	"context"
	"fmt"

	"github.com/pkg/errors"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db/models"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserTagRepository struct{}

var _ repository.UserTagRepository = (*UserTagRepository)(nil)

func NewUserTagRepository() *UserTagRepository {
	return &UserTagRepository{}
}

// Get(ctx context.Context, input *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error)
// List(tx context.Context, input *pb.ListUserTagRequest) (*pb.ListUserTagResponse, error)
// Insert(ctx context.Context, input *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error)
// Update(ctx context.Context, input *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error)
// Delete(ctx context.Context, input *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse , error)

func (r *UserTagRepository) toDomain(source *models.UserTag) *model.UserTag {
	var groupID int64 = 0

	if source.GroupID.Valid {
		groupID = *source.GroupID.Ptr()
	}

	return &model.UserTag{
		ID:         source.ID,
		UserID:     source.UserID,
		TagName:    source.TagName,
		HasGroup:   source.GroupID.Valid,
		GroupID:    groupID,
		GrantLimit: source.GrantLimit,
	}
}

func (r *UserTagRepository) List(ctx context.Context, conn repository.DBConnection, userID string) ([]*model.UserTag, error) {
	userTags, err := models.UserTags(
		models.UserTagWhere.UserID.EQ(userID),
	).All(ctx, conn)
	if err != nil {
		return nil, errors.Wrap(err, fmt.Sprintf("Something went wrong. Get UserTag. userID: %s", userID))
	}

	var userTagList []*model.UserTag
	for _, userTag := range userTags {
		response := r.toDomain(userTag)
		userTagList = append(userTagList, response)
	}

	return userTagList, nil
}

func (r *UserTagRepository) Get(ctx context.Context, conn repository.DBConnection, input *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error) {
	return &pb.GetUserTagResponse{
		Id:         1,
		UserId:     "dummy-uuid",
		TagName:    "dummy-tag",
		HasGroup:   true,
		GroupId:    1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Insert(ctx context.Context, conn repository.DBConnection, input *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error) {
	return &pb.RegisterUserTagResponse{
		Id:         1,
		UserId:     "dummy-uuid",
		TagName:    "dummy-tag",
		HasGroup:   true,
		GroupId:    1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) InitInsert(ctx context.Context, conn repository.DBConnection, userID string) error {
	adminTag, err := models.AdminTags().All(ctx, conn)
	if err != nil {
		return err
	}
	for _, tag := range adminTag {
		userTag := models.UserTag{
			UserID:     userID,
			TagName:    tag.TagName,
			GrantLimit: tag.GrantLimit,
		}
		err := userTag.Insert(ctx, conn, boil.Infer())
		if err != nil {
			return errors.Wrap(err, "failed to insert user tag.")
		}
	}
	return nil
}

func (r *UserTagRepository) Update(ctx context.Context, conn repository.DBConnection, input *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error) {
	return &pb.UpdateUserTagResponse{
		Id:         1,
		UserId:     "dummy-uuid",
		TagName:    "dummy-tag",
		HasGroup:   true,
		GroupId:    1,
		GrantLimit: "INCOME",
	}, nil
}

func (r *UserTagRepository) Delete(ctx context.Context, conn repository.DBConnection, input *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse, error) {
	return &pb.DeleteUserTagResponse{
		Id:     1,
		UserId: "uuid-dummy",
	}, nil
}
