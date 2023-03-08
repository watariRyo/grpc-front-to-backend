package main

import (
	"log"
	"net"

	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db"
	"github.com/watariRyo/balance/server/infra/redis"
	"github.com/watariRyo/balance/server/middleware"
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

	redisClient, err := redis.NewRedisClient(&cfg.Redis)
	if err != nil {
		panic(err)
	}

	// Repository作成
	allRepository := &repository.AllRepository{
		DBConnection: 					conn,
		DBTransaction: 					db.Transaction,
		RedisClient: 					redisClient,
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

	// Middleware作成
	tokenMiddleware := middleware.NewTokenMiddleware(tokenMaker)

	// Server Opts...
	opts := []grpc.ServerOption{}
	tls := cfg.Tls.TlsMode // load config

	var creds credentials.TransportCredentials
	if tls {
		certFile := cfg.Tls.CrtFile
		keyFile := cfg.Tls.PemFile
		creds, err = credentials.NewServerTLSFromFile(certFile, keyFile)

		if err != nil {
			log.Fatalf("Failed loading certification: %v\n", err)
		}

		opts = append(opts, grpc.Creds(creds))
	}

	// middleware
	opts = append(opts, grpc.ChainUnaryInterceptor(
		middleware.TraceUnaryServerInterceptor(),
		tokenMiddleware.AuthFunc(),
	))

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