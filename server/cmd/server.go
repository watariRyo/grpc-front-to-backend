package main

import (
	"log"
	"net"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db"
	pb "github.com/watariRyo/balance/server/proto"
	"github.com/watariRyo/balance/server/service"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

func main() {
	// Load config
	cfg, err := config.Load()
	if err != nil {
		panic(err)
	}

	// Initialize Server
	listen, err := net.Listen("tcp", cfg.Host) // load config
	if err != nil {
		log.Fatalf("Failed to listen on: %v\n", err)
	}

	opts := []grpc.ServerOption{}
	tls := cfg.Tls.TlsMode // load config

	if tls {
		certFile := cfg.Tls.CrtFile
		keyFile := cfg.Tls.PemFile
		creds, err := credentials.NewServerTLSFromFile(certFile, keyFile)

		if err != nil {
			log.Fatalf("Failed loading certification: %v\n", err)
		}

		opts = append(opts, grpc.Creds(creds))
	}

	// dbConnection取得
	dbConnectionManager := db.NewConnectionManager(
		db.Username(cfg.Db.Username),
		db.Password(cfg.Db.Password),
		db.Host(cfg.Db.Host),
		db.Port(cfg.Db.Port),
		db.Schema(cfg.Db.Schema),
		db.DebugMode(cfg.Db.DebugMode),
	)
	conn, err := dbConnectionManager.Open()
	if err != nil {
		panic(err)
	}

	// Repository作成
	allRepository := &repository.AllRepository{
		DBConnection: 					conn,
		DBTransaction: 					db.Transaction,
		UserRepository: 				db.NewUserRepository(),
		UserTagRepository: 				db.NewUserTagRepository(),
		GroupRepository: 				db.NewGroupRepository(),
		IncomeAndExpenditureRepository: db.NewIncomeAndExpenditureRepository(),
	}

	// Service作成
	userService := service.NewUserService(*allRepository)
	userTagService := service.NewUserTagService(*allRepository)
	groupService := service.NewGroupService(*allRepository)
	incomeAndExpenditureService := service.NewIncomAndExpenditureService(*allRepository)

	// Run Server
	s := grpc.NewServer(opts...)
	pb.RegisterUserServiceServer(s, userService)
	pb.RegisterUserTagServiceServer(s, userTagService)
	pb.RegisterGroupServiceServer(s, groupService)
	pb.RegisterIncomeAndExpenditureServiceServer(s, incomeAndExpenditureService)

	if err = s.Serve(listen); err != nil {
		log.Fatalf("Failed to server: %v\n", err)
	}
}