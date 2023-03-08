package repository

import (
	"time"

	"github.com/watariRyo/balance/server/domain/model"
)

type RedisClient interface {
	SaveSession(sessionID string, sessionData model.SessionData, duration time.Duration) error
	GetSession(sessionID string) (string, error) 
	DeleteSession(sessionID string) error
}
