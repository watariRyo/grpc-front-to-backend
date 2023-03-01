package service

import (
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type (

	userService struct {
		// pb.UserServiceServer
		pb.UnimplementedUserServiceServer
		repository.AllRepository
	}

	userTagService struct {
		// pb.UserTagServiceServer
		pb.UnimplementedUserTagServiceServer
		repository.AllRepository
	}

	groupService struct {
		// pb.GroupServiceServer
		pb.UnimplementedGroupServiceServer
		repository.AllRepository
	}

	incomeAndExpenditureService struct {
		// pb.IncomeAndExpenditureServiceServer	
		pb.UnimplementedIncomeAndExpenditureServiceServer
		repository.AllRepository
	}
)