package db

import (
	"context"
	"fmt"

	"github.com/friendsofgo/errors"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db/models"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepository struct{}

var _ repository.UserRepository = (*UserRepository)(nil)

func NewUserRepository() *UserRepository {
	return &UserRepository{}
}

func (r *UserRepository) toDomain(models *models.User) *model.User {
	return &model.User{
		UserID:           models.UserID,
		Password:         models.Password,
		IsPrivacyChecked: models.IsPrivacyChecked,
	}
}

func (r *UserRepository) Get(ctx context.Context, conn repository.DBConnection, userID string) (*model.User, error) {
	user, err := models.Users(
		models.UserWhere.UserID.EQ(userID),
	).One(ctx, conn)
	if err != nil {
		return nil, errors.Wrap(err, "Something went wrong. get user by userID")
	}

	return r.toDomain(user), nil
}

func (r *UserRepository) Exist(ctx context.Context, conn repository.DBConnection, userID string) (bool, error) {
	users, err := models.Users(
		models.UserWhere.UserID.EQ(userID),
	).All(ctx, conn)
	if err != nil {
		return false, errors.Wrap(err, "Something went wrong. get user by userID")
	}
	if len(users) > 0 {
		return true, nil
	} else {
		return false, nil
	}
}

func (r *UserRepository) Login(ctx context.Context, conn repository.DBConnection, input *pb.LoginUserRequest) (*model.User, error) {
	user, err := models.Users(
		models.UserWhere.UserID.EQ(input.UserId),
	).One(ctx, conn)
	if err != nil {
		return nil, errors.Wrap(err, "Something went wrong. get user by userID")
	}

	return r.toDomain(user), nil
}

func (r *UserRepository) Insert(ctx context.Context, conn repository.DBConnection, input *pb.RegisterUserRequest) (*model.User, error) {
	user := &models.User{
		UserID:           input.UserId,
		Password:         input.Password,
		IsPrivacyChecked: true,
	}

	err := user.Insert(ctx, conn, boil.Infer())
	if err != nil {
		return nil, errors.Wrap(err, fmt.Sprintf("Error inserting user. %s", input.UserId))
	}

	return r.toDomain(user), nil
}

func (r *UserRepository) Update(ctx context.Context, conn repository.DBConnection, input *pb.UpdateUserRequest) (*pb.UpdateUserResponse, error) {
	return &pb.UpdateUserResponse{
		UserId:           "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (r *UserRepository) Delete(ctx context.Context, conn repository.DBConnection, input *pb.DeleteUserRequest) (*pb.DeleteUserResponse, error) {
	return &pb.DeleteUserResponse{
		UserId: "uuid-dummy",
	}, nil
}
