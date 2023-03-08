package service

import (
	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
	"github.com/watariRyo/balance/server/time"
	"github.com/watariRyo/balance/server/token"
)

type (

	userService struct {
		// pb.UserServiceServer
		pb.UnimplementedUserServiceServer
		repo 		*repository.AllRepository
		cfg  		*config.Config
		tokenMaker 	token.Maker
		time 		time.Clock
	}

	userTagService struct {
		// pb.UserTagServiceServer
		pb.UnimplementedUserTagServiceServer
		repo 		*repository.AllRepository
		cfg  		*config.Config
		tokenMaker 	token.Maker
		time 		time.Clock
	}

	groupService struct {
		// pb.GroupServiceServer
		pb.UnimplementedGroupServiceServer
		repo 		*repository.AllRepository
		cfg  		*config.Config
		tokenMaker 	token.Maker
		time 		time.Clock
	}

	incomeAndExpenditureService struct {
		// pb.IncomeAndExpenditureServiceServer	
		pb.UnimplementedIncomeAndExpenditureServiceServer
		repo 		*repository.AllRepository
		cfg  		*config.Config
		tokenMaker 	token.Maker
		time 		time.Clock
	}
)