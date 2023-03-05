package service

import (
	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
	"github.com/watariRyo/balance/server/token"
)

type (

	userService struct {
		// pb.UserServiceServer
		pb.UnimplementedUserServiceServer
		*repository.AllRepository
		*config.Config
		TokenMaker token.Maker
	}

	userTagService struct {
		// pb.UserTagServiceServer
		pb.UnimplementedUserTagServiceServer
		*repository.AllRepository
		*config.Config
		TokenMaker token.Maker
	}

	groupService struct {
		// pb.GroupServiceServer
		pb.UnimplementedGroupServiceServer
		*repository.AllRepository
		*config.Config
		TokenMaker token.Maker
	}

	incomeAndExpenditureService struct {
		// pb.IncomeAndExpenditureServiceServer	
		pb.UnimplementedIncomeAndExpenditureServiceServer
		*repository.AllRepository
		*config.Config
		TokenMaker token.Maker
	}
)