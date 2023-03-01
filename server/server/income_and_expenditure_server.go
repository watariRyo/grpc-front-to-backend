package server

// ListIncomeAndExpenditure(context.Context, *IncomeAndExpenditureListRequest) (*IncomeAndExpenditureListResponse, error)
// GetIncomeAndExpenditure(context.Context, *IncomeAndExpenditureID) (*IncomeAndExpenditureResponse, error)
// RegisterIncomeAndExpenditure(context.Context, *IncomeAndExpenditureRequest) (*IncomeAndExpenditureResponse, error)
// UpdateIncomeAndExpenditure(context.Context, *IncomeAndExpenditureRequest) (*IncomeAndExpenditureResponse, error)
// DeleteIncomeAndExpenditure(context.Context, *IncomeAndExpenditureID) (*IncomeAndExpenditureID, error)

import (
	"context"
	"log"

	pb "github.com/watariRyo/balance/server/proto"
)

func (s *IncomAndExpenditureServer) ListIncomeAndExpenditure(ctx context.Context, request *pb.IncomeAndExpenditureListRequest) (*pb.IncomeAndExpenditureListResponse, error) {
	log.Println("ListIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureListResponse{
		IncomeAndExpenditureList: []*pb.IncomeAndExpenditureResponse{},
	}, nil
}

func (s *IncomAndExpenditureServer) GetIncomeAndExpenditure(ctx context.Context, incomeAndExpenditureID *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureResponse, error) {
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

func (s *IncomAndExpenditureServer) RegisterIncomeAndExpenditure(ctx context.Context, request *pb.IncomeAndExpenditureRequest) (*pb.IncomeAndExpenditureResponse, error) {
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

func (s *IncomAndExpenditureServer) UpdateIncomeAndExpenditure(ctx context.Context, request *pb.IncomeAndExpenditureRequest) (*pb.IncomeAndExpenditureResponse, error) {
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

func (s *IncomAndExpenditureServer) DeleteIncomeAndExpenditure(ctx context.Context, incomeAndExpenditureID *pb.IncomeAndExpenditureID) (*pb.IncomeAndExpenditureID, error) {
	log.Println("DeleteIncomeAndExpenditure was invoked.")

	return &pb.IncomeAndExpenditureID{
		Id: 1,
		UserId: "userId",
	}, nil
}