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
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/logger"
	"github.com/watariRyo/balance/server/messages"
	pb "github.com/watariRyo/balance/server/proto"
	ltime "github.com/watariRyo/balance/server/time"
	"github.com/watariRyo/balance/server/token"
)

func NewIncomAndExpenditureService(r *repository.AllRepository, cfg *config.Config, tokenMaker token.Maker) *incomeAndExpenditureService {
	t := ltime.NewRealClock(*time.Local)

	return &incomeAndExpenditureService{
		repo:       r,
		cfg:        cfg,
		tokenMaker: tokenMaker,
		time:       t,
	}
}

func (s *incomeAndExpenditureService) ListIncomeAndExpenditure(ctx context.Context, request *pb.ListIncomeAndExpenditureRequest) (*pb.ListIncomeAndExpenditureResponse, error) {
	log.Println("ListIncomeAndExpenditure was invoked.")

	return s.repo.IncomeAndExpenditureRepository.List(ctx, request)
}

func (s *incomeAndExpenditureService) GetIncomeAndExpenditure(ctx context.Context, incomeAndExpenditureID *pb.GetIncomeAndExpenditureRequest) (*pb.GetIncomeAndExpenditureResponse, error) {
	log.Println("GetIncomeAndExpenditure was invoked.")

	return &pb.GetIncomeAndExpenditureResponse{
		Id:             1,
		UserId:         "userId",
		Amount:         100,
		OccurrenceDate: "2023-01-01",
		UserTagId:      1,
		Classification: "INCOME",
	}, nil
}

func (s *incomeAndExpenditureService) RegisterIncomeAndExpenditure(ctx context.Context, request *pb.RegisterIncomeAndExpenditureRequest) (*pb.RegisterIncomeAndExpenditureResponse, error) {
	log.Println("RegisterIncomeAndExpenditure was invoked.")

	// セッション（Redis）取得
	sessionData, err := s.repo.RedisClient.GetSession(request.SessionId)
	if err != nil {
		logger.Errorf(ctx, "something went wrong. %v.", err)
		return nil, messages.SessionError(err.Error()).Err()
	}

	registeredIncomeAndExpenditure, err := s.repo.IncomeAndExpenditureRepository.Insert(ctx, s.repo.DBConnection, &model.IncomeAndExpenditure{
		UserID:         sessionData.UserID,
		Name:           request.Name,
		Amount:         request.Amount,
		OccurrenceDate: request.OccurrenceDate,
		UserTagID:      request.UserTagId,
		Classification: request.Classification,
	})

	return &pb.RegisterIncomeAndExpenditureResponse{
		Id:             registeredIncomeAndExpenditure.ID,
		UserId:         registeredIncomeAndExpenditure.UserID,
		Name:           registeredIncomeAndExpenditure.Name,
		Amount:         registeredIncomeAndExpenditure.Amount,
		OccurrenceDate: registeredIncomeAndExpenditure.OccurrenceDate,
		UserTagId:      registeredIncomeAndExpenditure.UserTagID,
		Classification: registeredIncomeAndExpenditure.Classification,
	}, nil
}

func (s *incomeAndExpenditureService) UpdateIncomeAndExpenditure(ctx context.Context, request *pb.UpdateIncomeAndExpenditureRequest) (*pb.UpdateIncomeAndExpenditureResponse, error) {
	log.Println("UpdateIncomeAndExpenditure was invoked.")

	return &pb.UpdateIncomeAndExpenditureResponse{
		Id:             1,
		UserId:         "userId",
		Amount:         100,
		OccurrenceDate: "2023-01-01",
		UserTagId:      1,
		Classification: "INCOME",
	}, nil
}

func (s *incomeAndExpenditureService) DeleteIncomeAndExpenditure(ctx context.Context, incomeAndExpenditureID *pb.DeleteIncomeAndExpenditureRequest) (*pb.DeleteIncomeAndExpenditureResponse, error) {
	log.Println("DeleteIncomeAndExpenditure was invoked.")

	return &pb.DeleteIncomeAndExpenditureResponse{
		Id:     1,
		UserId: "userId",
	}, nil
}
