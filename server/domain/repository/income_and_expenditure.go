package repository

import (
	"context"

	"github.com/watariRyo/balance/server/domain/model"
	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepository interface {
	Get(ctx context.Context, input *pb.GetIncomeAndExpenditureRequest) (*pb.GetIncomeAndExpenditureResponse, error)
	List(tx context.Context, conn DBConnection, input *model.IncomeAndExpenditureListByQuery) ([]*model.IncomeAndExpenditure, error)
	Insert(ctx context.Context, conn DBConnection, input *model.IncomeAndExpenditure) (*model.IncomeAndExpenditure, error)
	Update(ctx context.Context, input *pb.UpdateIncomeAndExpenditureRequest) (*pb.UpdateIncomeAndExpenditureResponse, error)
	Delete(ctx context.Context, input *pb.DeleteIncomeAndExpenditureRequest) (*pb.DeleteIncomeAndExpenditureResponse, error)
}
