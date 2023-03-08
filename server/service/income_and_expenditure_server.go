package service

// ListIncomeAndExpenditure(context.Context, *IncomeAndExpenditureListRequest) (*IncomeAndExpenditureListResponse, error)
// GetIncomeAndExpenditure(context.Context, *IncomeAndExpenditureID) (*IncomeAndExpenditureResponse, error)
// RegisterIncomeAndExpenditure(context.Context, *IncomeAndExpenditureRequest) (*IncomeAndExpenditureResponse, error)
// UpdateIncomeAndExpenditure(context.Context, *IncomeAndExpenditureRequest) (*IncomeAndExpenditureResponse, error)
// DeleteIncomeAndExpenditure(context.Context, *IncomeAndExpenditureID) (*IncomeAndExpenditureID, error)

import (
	"context"
	"log"
	"time"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
	ltime "github.com/watariRyo/balance/server/time"
	"github.com/watariRyo/balance/server/token"
)

func NewIncomAndExpenditureService(r *repository.AllRepository, cfg *config.Config, tokenMaker token.Maker) *incomeAndExpenditureService {
	t := ltime.NewRealClock(*time.Local)

	return &incomeAndExpenditureService{
		repo: r,
		cfg: cfg,
		tokenMaker: tokenMaker,
		time: t,
	}
}

func (s *incomeAndExpenditureService) ListIncomeAndExpenditure(ctx context.Context, request *pb.IncomeAndExpenditureListRequest) (*pb.IncomeAndExpenditureListResponse, error) {
	log.Println("ListIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureListResponse{
		IncomeAndExpenditureList: []*pb.IncomeAndExpenditureResponse{},
	}, nil
}

func (s *incomeAndExpenditureService) GetIncomeAndExpenditure(ctx context.Context, incomeAndExpenditureID *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureResponse, error) {
	log.Println("GetIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureResponse{
		Id: 1,
		UserId: "userId",
		Amount: 100,
		OccurrenceDate: "2023-01-01",
		UserTagId: 1,
		Classification: "INCOME",
	}, nil
}

func (s *incomeAndExpenditureService) RegisterIncomeAndExpenditure(ctx context.Context, request *pb.IncomeAndExpenditureRequest) (*pb.IncomeAndExpenditureResponse, error) {
	log.Println("RegisterIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureResponse{
		Id: 1,
		UserId: "userId",
		Amount: 100,
		OccurrenceDate: "2023-01-01",
		UserTagId: 1,
		Classification: "INCOME",
	}, nil
}

func (s *incomeAndExpenditureService) UpdateIncomeAndExpenditure(ctx context.Context, request *pb.IncomeAndExpenditureRequest) (*pb.IncomeAndExpenditureResponse, error) {
	log.Println("UpdateIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureResponse{
		Id: 1,
		UserId: "userId",
		Amount: 100,
		OccurrenceDate: "2023-01-01",
		UserTagId: 1,
		Classification: "INCOME",
	}, nil
}

func (s *incomeAndExpenditureService) DeleteIncomeAndExpenditure(ctx context.Context, incomeAndExpenditureID *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureID, error) {
	log.Println("DeleteIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureID{
		Id: 1,
		UserId: "userId",
	}, nil
}