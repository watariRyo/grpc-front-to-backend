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
	"google.golang.org/protobuf/encoding/protojson"
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
		runtime.WithIncomingHeaderMatcher(func(key string) (string, bool) {
            return runtime.DefaultHeaderMatcher(key)
        }),
		runtime.WithMarshalerOption(runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{
				UseProtoNames: true,
				EmitUnpopulated: true,
			},
			UnmarshalOptions: protojson.UnmarshalOptions{
				DiscardUnknown: true,
			},
		}),
	)

	opts := []grpc.DialOption{
		grpc.WithInsecure(),
	}

	// Handlerに, アドレス指定でアップストリームgRPCサーバの場所を教える.
	// このHandlerはリクエストを受け取ったらgRPCのリクエストに詰め替えてサーバとやり取りする.
	if err := proto.RegisterGroupServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatalf("failed to register grpc-server-group. %v", err)
	}
	if err := proto.RegisterUserServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatalf("failed to register grpc-server-user. %v", err)
	}
	if err := proto.RegisterUserTagServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatalf("failed to register grpc-server-user-tag. %v", err)
	}
	if err := proto.RegisterIncomeAndExpenditureServiceHandlerFromEndpoint(ctx, mux, grpcServerAddress, opts); err != nil {
		log.Fatalf("failed to register grpc-server-income-and-expenditure. %v", err)
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