package server

import pb "github.com/watariRyo/balance/server/proto"

type (
	UserServer struct {
		pb.UserServiceServer
	}
	UserTagServer struct {
		pb.UserTagServiceServer
	}
	GroupServer struct {
		pb.GroupServiceServer
	}
	IncomAndExpenditureServer struct {
		pb.IncomeAndExpenditureServiceServer	
	}
)