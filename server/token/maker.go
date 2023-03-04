package token

import (
	"time"

	"github.com/watariRyo/balance/server/domain/model"
)

type Maker interface {
	CreateToken(username string, duration time.Duration) (string, error)

	VerifyToken(token string) (*model.Payload, error)
}
