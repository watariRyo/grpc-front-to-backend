package db

import (
	"context"
	"fmt"

	"github.com/friendsofgo/errors"
	"github.com/volatiletech/null/v8"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db/models"
	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepository struct{}

var _ repository.IncomeAndExpenditureRepository = (*IncomeAndExpenditureRepository)(nil)

func NewIncomeAndExpenditureRepository() *IncomeAndExpenditureRepository {
	return &IncomeAndExpenditureRepository{}
}

func (r *IncomeAndExpenditureRepository) toDomain(input models.IncomeAndExpenditure) *model.IncomeAndExpenditure {
	return &model.IncomeAndExpenditure{
		ID:             input.ID,
		UserID:         input.UserID,
		Name:           input.Name,
		Amount:         int32(input.Amount),
		OccurrenceDate: input.OccurrenceDate,
		UserTagID:      *input.UserTagID.Ptr(),
		Classification: input.Classification,
	}
}

func (r *IncomeAndExpenditureRepository) List(ctx context.Context, conn repository.DBConnection, input *model.IncomeAndExpenditureListByQuery) ([]*model.IncomeAndExpenditure, error) {

	balances, err := models.IncomeAndExpenditures(
		models.IncomeAndExpenditureWhere.UserID.EQ(input.UserID),
		models.IncomeAndExpenditureWhere.OccurrenceDate.GTE(input.OccurrenceDateFrom),
		models.IncomeAndExpenditureWhere.OccurrenceDate.LTE(input.OccurrenceDateTo),
		qm.OrderBy(fmt.Sprintf("%s asc", models.IncomeAndExpenditureColumns.OccurrenceDate)),
	).All(ctx, conn)

	if err != nil {
		return nil, err
	}

	var incomeAndExpenditures []*model.IncomeAndExpenditure

	for _, incomeAndExpend := range balances {
		incomeAndExpenditures = append(incomeAndExpenditures, r.toDomain(*incomeAndExpend))
	}

	return incomeAndExpenditures, nil
}

func (r *IncomeAndExpenditureRepository) Get(ctx context.Context, input *pb.GetIncomeAndExpenditureRequest) (*pb.GetIncomeAndExpenditureResponse, error) {
	return &pb.GetIncomeAndExpenditureResponse{
		Id:             1,
		UserId:         "userId",
		Amount:         100,
		OccurrenceDate: "2023-01-01",
		UserTagId:      1,
		Classification: "INCOME",
	}, nil
}

func (r *IncomeAndExpenditureRepository) Insert(ctx context.Context, conn repository.DBConnection, input *model.IncomeAndExpenditure) (*model.IncomeAndExpenditure, error) {
	incomeAndExpenditure := &models.IncomeAndExpenditure{
		UserID:         input.UserID,
		Name:           input.Name,
		Amount:         int(input.Amount),
		OccurrenceDate: input.OccurrenceDate,
		UserTagID:      null.Int64From(input.UserTagID),
		Classification: input.Classification,
	}

	err := incomeAndExpenditure.Insert(ctx, conn, boil.Infer())
	if err != nil {
		return nil, errors.Wrap(err, fmt.Sprintf("Error inserting IncomeAndExpenditure. userID:%s Name:%s", input.UserID, input.Name))
	}

	return r.toDomain(*incomeAndExpenditure), nil
}

func (r *IncomeAndExpenditureRepository) Update(ctx context.Context, input *pb.UpdateIncomeAndExpenditureRequest) (*pb.UpdateIncomeAndExpenditureResponse, error) {
	return &pb.UpdateIncomeAndExpenditureResponse{
		Id:             1,
		UserId:         "userId",
		Amount:         100,
		OccurrenceDate: "2023-01-01",
		UserTagId:      1,
		Classification: "INCOME",
	}, nil
}

func (r *IncomeAndExpenditureRepository) Delete(ctx context.Context, input *pb.DeleteIncomeAndExpenditureRequest) (*pb.DeleteIncomeAndExpenditureResponse, error) {
	return &pb.DeleteIncomeAndExpenditureResponse{
		Id:     1,
		UserId: "userId",
	}, nil
}
