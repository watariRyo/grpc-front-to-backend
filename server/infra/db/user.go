package db

import (
	"context"

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

func (r *UserRepository) Get(ctx context.Context, conn repository.DBConnection, input *pb.GetUserRequest) (*pb.GetUserResponse, error) {
	return &pb.GetUserResponse{
		UserId:           "uuid-dummy",
		IsPrivacyChecked: true,
	}, nil
}

func (r *UserRepository) Login(ctx context.Context, conn repository.DBConnection, input *pb.LoginUserRequest) (*model.User, error) {
	user, err := models.Users(
		models.UserWhere.UserID.EQ(input.UserId),
	).One(ctx, conn)
	if err != nil {
		return nil, err
	}

	return &model.User{
		UserId:           user.UserID,
		IsPrivacyChecked: user.IsPrivacyChecked,
	}, nil
}

func (r *UserRepository) Insert(ctx context.Context, conn repository.DBConnection, input *pb.RegisterUserRequest) (*model.User, error) {
	user := models.User{
		UserID:           input.UserId,
		Password:         input.Password,
		IsPrivacyChecked: true,
	}

	err := user.Insert(ctx, conn, boil.Infer())
	if err != nil {
		return nil, err
	}

	return &model.User{
		UserId:           user.UserID,
		IsPrivacyChecked: true,
	}, nil
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
