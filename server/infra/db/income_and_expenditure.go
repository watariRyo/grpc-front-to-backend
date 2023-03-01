package db

import (
	"context"

	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepository struct {}

var _ repository.IncomeAndExpenditureRepository = (*IncomeAndExpenditureRepository)(nil)

func NewIncomeAndExpenditureRepository() *IncomeAndExpenditureRepository {
	return &IncomeAndExpenditureRepository{}
}

func (r *IncomeAndExpenditureRepository) List(ctx context.Context, input *pb.IncomeAndExpenditureListRequest) (*pb.IncomeAndExpenditureListResponse, error) {
	return &pb.IncomeAndExpenditureListResponse{
		IncomeAndExpenditureList: []*pb.IncomeAndExpenditureResponse{},
	}, nil
}

func (r *IncomeAndExpenditureRepository) Get(ctx context.Context, input *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureResponse, error) {
	return &pb.IncomeAndExpenditureResponse{
		Id: 1,
		UserId: "userId",
		Amount: 100,
		OccurrenceDate: "2023-01-01",
		UserTagId: 1,
		Classification: "INCOME",
	}, nil
}

func (r *IncomeAndExpenditureRepository) Upsert(ctx context.Context, input *pb.IncomeAndExpenditureRequest) (*pb.IncomeAndExpenditureResponse, error) {
	return &pb.IncomeAndExpenditureResponse{
		Id: 1,
		UserId: "userId",
		Amount: 100,
		OccurrenceDate: "2023-01-01",
		UserTagId: 1,
		Classification: "INCOME",
	}, nil
}

func (r *IncomeAndExpenditureRepository) Delete(ctx context.Context, input *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureID , error) {
	return &pb.IncomeAndExpenditureID{
		Id: 1,
		UserId: "userId",
	}, nil
}

