package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepository struct{}

var _ repository.IncomeAndExpenditureRepository = (*IncomeAndExpenditureRepository)(nil)

func NewIncomeAndExpenditureRepository() *IncomeAndExpenditureRepository {
	return &IncomeAndExpenditureRepository{}
}

func (r *IncomeAndExpenditureRepository) List(tx context.Context, input *pb.ListIncomeAndExpenditureRequest) (*pb.ListIncomeAndExpenditureResponse, error) {
	return &pb.ListIncomeAndExpenditureResponse{
		IncomeAndExpenditureList: []*pb.IncomeAndExpenditureResponse{
			{
				Id:             1,
				UserId:         "hoge",
				Name:           "income",
				Amount:         1000,
				OccurrenceDate: "2022-01-01",
				UserTagId:      1,
				Classification: "INCOME",
			},
			{
				Id:             2,
				UserId:         "hoge",
				Name:           "Expenditure",
				Amount:         2000,
				OccurrenceDate: "2022-01-02",
				UserTagId:      2,
				Classification: "EXPENDITURE",
			},
		},
	}, nil
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

func (r *IncomeAndExpenditureRepository) Insert(ctx context.Context, input *pb.RegisterIncomeAndExpenditureRequest) (*pb.RegisterIncomeAndExpenditureResponse, error) {
	return &pb.RegisterIncomeAndExpenditureResponse{
		Id:             1,
		UserId:         "userId",
		Amount:         100,
		OccurrenceDate: "2023-01-01",
		UserTagId:      1,
		Classification: "INCOME",
	}, nil
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
