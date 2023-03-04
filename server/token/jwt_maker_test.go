package token

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	"github.com/watariRyo/balance/server/domain/model"
)

func TestJWTMaker(t *testing.T) {
	maker, err := NewJWTMaker("abcde12345abcde12345abcde12345ab")
	require.NoError(t, err)

	username := "testuser"
	duration := time.Minute

	issuedAt := time.Now()
	expiredAt := issuedAt.Add(duration)

	token, err := maker.CreateToken(username, duration)
	require.NoError(t, err)
	require.NotEmpty(t, token)

	payload, err := maker.VerifyToken(token)
	require.NoError(t, err)
	require.NotEmpty(t, token)

	require.NotZero(t, payload.ID)
	require.Equal(t, username, payload.Username)
	require.WithinDuration(t, issuedAt, payload.IssuedAt, time.Second)
	require.WithinDuration(t, expiredAt, payload.ExpiredAt, time.Second)
}

func TestExpiredJWTToken(t *testing.T) {
	maker, err := NewJWTMaker("abcde12345abcde12345abcde12345ab")
	require.NoError(t, err)

	username := "testuser"
	duration := -time.Minute

	token, err := maker.CreateToken(username, duration)
	require.NoError(t, err)
	require.NotEmpty(t, token)

	payload, err := maker.VerifyToken(token)
	require.Error(t, err)
	require.EqualError(t, err, model.ErrExpiredToken.Error())
	require.Nil(t, payload)
}
