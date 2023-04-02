package repository

import (
	"context"

	"github.com/watariRyo/balance/server/domain/model"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserTagRepository interface {
	Get(ctx context.Context, conn DBConnection, input *pb.GetUserTagRequest) (*pb.GetUserTagResponse, error)
	List(tx context.Context, conn DBConnection, userID string) ([]*model.UserTag, error)
	Insert(ctx context.Context, conn DBConnection, input *pb.RegisterUserTagRequest) (*pb.RegisterUserTagResponse, error)
	Update(ctx context.Context, conn DBConnection, input *pb.UpdateUserTagRequest) (*pb.UpdateUserTagResponse, error)
	Delete(ctx context.Context, conn DBConnection, input *pb.DeleteUserTagRequest) (*pb.DeleteUserTagResponse, error)
	InitInsert(ctx context.Context, conn DBConnection, userID string) error
}
