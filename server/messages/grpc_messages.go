package messages

import (
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func CreateTokenError() *status.Status {
	st := status.New(codes.Internal, "Could not create token.")
	st.WithDetails(
		&errdetails.LocalizedMessage{
			Locale: "ja-JP",
			Message: "トークン生成に失敗しました",
		},
	)
	return st
}

func PasswordMismatch() *status.Status {
	st := status.New(codes.Unauthenticated, "Incorrect userID or password.")
	st.WithDetails(
		&errdetails.LocalizedMessage{
			Locale: "ja-JP",
			Message: "ユーザIDかパスワードに誤りがあります",
		},
	)
	return st
}

func FailedMakePasswordHash() *status.Status {
	st := status.New(codes.Internal, "Could not hashed password.")
	st.WithDetails(
		&errdetails.LocalizedMessage{
			Locale: "ja-JP",
			Message: "パスワードハッシュ化に失敗しました",
		},
	)
	return st
}