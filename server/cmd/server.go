package main

import (
	"log"
	"net"

	"github.com/watariRyo/balance/server/config"
	pb "github.com/watariRyo/balance/server/proto"
	"github.com/watariRyo/balance/server/server"
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

	// Run Server
	s := grpc.NewServer(opts...)
	pb.RegisterUserServiceServer(s, &server.UserServer{})
	pb.RegisterUserTagServiceServer(s, &server.UserTagServer{})
	pb.RegisterGroupServiceServer(s, &server.GroupServer{})
	pb.RegisterIncomeAndExpenditureServiceServer(s, &server.IncomAndExpenditureServer{})

	if err = s.Serve(listen); err != nil {
		log.Fatalf("Failed to server: %v\n", err)
	}
}