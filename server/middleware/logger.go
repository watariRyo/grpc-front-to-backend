package middleware

import (
	"context"

	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/peer"
)

func TraceUnaryServerInterceptor() grpc.UnaryServerInterceptor {
	return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
		md, _ := metadata.FromIncomingContext(ctx)
		peer, _ := peer.FromContext(ctx)

		token := md["authorization"]
		if len(token) < 1 {
			log.Info().Str("Method", info.FullMethod).Str("IPaddr", peer.Addr.String()).Msg("Method was called.")
		} else {
			log.Info().Str("Method", info.FullMethod).Str("Token", token[0]).Str("IPaddr", peer.Addr.String()).Msg("Method was called.")
		}

		return handler(ctx, req)
	}
}
