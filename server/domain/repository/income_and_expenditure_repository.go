package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepository interface {
	Get(ctx context.Context, input *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureResponse, error)
	List(tx context.Context, input *pb.IncomeAndExpenditureListRequest) (*pb.IncomeAndExpenditureListResponse, error)
	Upsert(ctx context.Context, input *pb.IncomeAndExpenditureRequest) (*pb.IncomeAndExpenditureResponse, error)
	Delete(ctx context.Context, input *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureID , error)
}