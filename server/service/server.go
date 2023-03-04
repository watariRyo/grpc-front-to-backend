package service

import (
	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type (

	userService struct {
		// pb.UserServiceServer
		pb.UnimplementedUserServiceServer
		*repository.AllRepository
		*config.Config
	}

	userTagService struct {
		// pb.UserTagServiceServer
		pb.UnimplementedUserTagServiceServer
		*repository.AllRepository
		*config.Config
	}

	groupService struct {
		// pb.GroupServiceServer
		pb.UnimplementedGroupServiceServer
		*repository.AllRepository
		*config.Config
	}

	incomeAndExpenditureService struct {
		// pb.IncomeAndExpenditureServiceServer	
		pb.UnimplementedIncomeAndExpenditureServiceServer
		*repository.AllRepository
		*config.Config
	}
)