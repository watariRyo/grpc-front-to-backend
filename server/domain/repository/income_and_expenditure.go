package repository

import (
	"context"

	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepository interface {
	Get(ctx context.Context, input *pb.GetIncomeAndExpenditureRequest) (*pb.GetIncomeAndExpenditureResponse, error)
	List(tx context.Context, input *pb.ListIncomeAndExpenditureRequest) (*pb.ListIncomeAndExpenditureResponse, error)
	Insert(ctx context.Context, input *pb.RegisterIncomeAndExpenditureRequest) (*pb.RegisterIncomeAndExpenditureResponse, error)
	Update(ctx context.Context, input *pb.UpdateIncomeAndExpenditureRequest) (*pb.UpdateIncomeAndExpenditureResponse, error)
	Delete(ctx context.Context, input *pb.DeleteIncomeAndExpenditureRequest) (*pb.DeleteIncomeAndExpenditureResponse , error)
}