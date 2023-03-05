package main

import (
	"log"
	"net"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db"
	pb "github.com/watariRyo/balance/server/proto"
	"github.com/watariRyo/balance/server/service"
	"github.com/watariRyo/balance/server/token"
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

	// tokenMaker作成
	tokenMaker, err := token.NewPasetoMaker([]byte(cfg.Secret.TokenSymmetricKey))
	if err != nil {
		panic(err)
	}

	// Service作成
	userService := service.NewUserService(allRepository, cfg, tokenMaker)
	userTagService := service.NewUserTagService(allRepository, cfg, tokenMaker)
	groupService := service.NewGroupService(allRepository, cfg, tokenMaker)
	incomeAndExpenditureService := service.NewIncomAndExpenditureService(allRepository, cfg, tokenMaker)

	// Run Server
	// TODO token認証のinterceptor
	s := grpc.NewServer(opts...)
	pb.RegisterUserServiceServer(s, userService)
	pb.RegisterUserTagServiceServer(s, userTagService)
	pb.RegisterGroupServiceServer(s, groupService)
	pb.RegisterIncomeAndExpenditureServiceServer(s, incomeAndExpenditureService)

	if err = s.Serve(listen); err != nil {
		log.Fatalf("Failed to server: %v\n", err)
	}
}