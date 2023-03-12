package cookie

import (
	"context"
	"errors"
	"net/http"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

func SetCookie(ctx context.Context, sessionID string) {
	cookie := http.Cookie {
		Name: "balance-sessionID",
		Value: sessionID,
		Path: "/",
		Secure: true,
		HttpOnly: false,
		SameSite: http.SameSiteLaxMode,
	}

	md := make(metadata.MD, 1)

	md.Set("set-cookie", cookie.String())

	grpc.SetHeader(ctx, md)
}

func ParseMetadataCookieSessionID(ctx context.Context) (sessionID string, err error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return "", errors.New("cannot get metadata.")
	}
	vs := md["cookie"]
	if len(vs) == 0 {
		return "", errors.New("no cookie.")
	}

	rowCookie := vs[0]

	if len(rowCookie) == 0 {
		return "", nil
	}

	parser := &http.Request{Header: http.Header{"cookie": []string{rowCookie}}}

	cookie, err := parser.Cookie("balance-sessionID")

	if err != nil {
		return "", err
	}

	return cookie.Value, nil
}