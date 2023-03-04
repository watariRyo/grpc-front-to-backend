package token

import (
	"errors"
	"fmt"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/watariRyo/balance/server/domain/model"
)

const minSecretKeySize = 32

type JWTMaker struct {
	secretKey string
}

func NewJWTMaker(secretKey string) (Maker, error) {
	if len(secretKey) < minSecretKeySize {
		return nil, fmt.Errorf("invalid ky size: must be at least %d char", minSecretKeySize)
	}
	return &JWTMaker{secretKey}, nil
}

func (m *JWTMaker) CreateToken(username string, duration time.Duration) (string, error) {
	payload, err := model.NewPayload(username, duration)
	if err != nil {
		return "", err
	}

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, payload)
	return jwtToken.SignedString([]byte(m.secretKey))
}

func (m *JWTMaker) VerifyToken(token string) (*model.Payload, error) {
	keyFunc := func(token *jwt.Token) (interface{}, error) {
		_, ok := token.Method.(*jwt.SigningMethodHMAC)
		if !ok {
			return nil, model.ErrInvalidToken
		}
		return []byte(m.secretKey), nil
	}

	jwtToken, err := jwt.ParseWithClaims(token, &model.Payload{}, keyFunc)
	if err != nil {
		 verr, ok := err.(*jwt.ValidationError)
		 if ok && errors.Is(verr.Inner, model.ErrExpiredToken) {
			return nil, model.ErrExpiredToken
		 }
		 return nil, model.ErrInvalidToken
	}

	payload, ok := jwtToken.Claims.(*model.Payload)
	if !ok {
		return nil, model.ErrInvalidToken
	}

	return payload, nil
}