package middleware

import (
	"context"

	"github.com/watariRyo/balance/server/messages"
	"github.com/watariRyo/balance/server/token"
	"github.com/watariRyo/balance/server/util"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

type AuthBypassFunction string

var (
	authBypassFunctions = []AuthBypassFunction {
		"/server.UserService/RegisterUser",
		"/server.UserService/LoginUser",
		"/server.UserService/LogoutUser",
	}
)

type TokenMiddleware interface {
	AuthFunc() grpc.UnaryServerInterceptor
}

type tokenMiddleware struct {
	tokenMaker token.Maker
}

var _ TokenMiddleware = (*tokenMiddleware)(nil)

func NewTokenMiddleware(tokenMaker token.Maker) TokenMiddleware {
	return &tokenMiddleware{tokenMaker}
}

func (tm *tokenMiddleware) AuthFunc() grpc.UnaryServerInterceptor  {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {

		// TODO Auth Skip
		if util.Contains(authBypassFunctions, info.FullMethod) {
			resp, err := handler(ctx, req)
	        return resp, err
		}
		println(info.FullMethod)

		md, _ := metadata.FromIncomingContext(ctx)

        token := md["authorization"]
		if (len(token) < 1) {
			return nil, messages.Unauthorized().Err()
		}
		_, err := tm.tokenMaker.VerifyToken(token[0])
		if err != nil {
			return nil, messages.Unauthorized().Err()
		}

		resp, err := handler(ctx, req)
        return resp, err
	}
}