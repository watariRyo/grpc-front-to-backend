package main

import (
	"context"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"github.com/watariRyo/balance/server/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

const grpcServerAddress = "backend:8080"
const docsServerAddress = "http://localhost:9000"

func main() {

	ctx := context.Background()
	ctx, cancel := context.WithCancel(ctx)
    defer cancel()

	// gateway用のhttp.Handler
	mux := runtime.NewServeMux(
		runtime.WithMetadata(requestMetadata),
	)

	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	// Handlerに, アドレス指定でアップストリームgRPCサーバの場所を教える.
	// このHandlerはリクエストを受け取ったらgRPCのリクエストに詰め替えてサーバとやり取りする.
	if err := proto.RegisterGroupServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Println(err)
		log.Fatal("failed to register grpc-server 1")		
	}
	if err := proto.RegisterUserServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatal("failed to register grpc-server 2")
	}
	if err := proto.RegisterUserTagServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatal("failed to register grpc-server 3")
	}
	if err := proto.RegisterIncomeAndExpenditureServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatal("failed to register grpc-server 4")
	}

	// handler
	handler := handlers.CORS(
		handlers.AllowedOrigins([]string{"*"}),
		handlers.AllowedMethods([]string{http.MethodPost, http.MethodGet, http.MethodPut, http.MethodDelete}),
		handlers.AllowedHeaders([]string{"Authorization", "Content-Type", "Accept-Encoding", "Accept"}),
	)(mux)

	// HandlerができたのであとはListenするだけ.
	if err := http.ListenAndServe(":9000", handler); err != nil {
		panic(err)
	}
}

func requestMetadata(ctx context.Context, req *http.Request) metadata.MD {
    authrization := req.Header.Get("authorization")
    if authrization == "" {
        authrization = "UNAUTHORIZED"
    }

    return metadata.New(map[string]string{
        authrization: authrization,
    })
}