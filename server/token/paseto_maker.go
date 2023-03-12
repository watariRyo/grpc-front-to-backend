package token

import (
	"fmt"
	"time"

	"github.com/aead/chacha20poly1305"
	"github.com/o1egl/paseto"
	"github.com/watariRyo/balance/server/domain/model"
)

type PasetoMaker struct {
	paset *paseto.V2
	symmetricKey []byte
}

func NewPasetoMaker(symmetricKey []byte) (Maker, error) {
	if len(symmetricKey) != chacha20poly1305.KeySize {
		return nil, fmt.Errorf("invalid key size: must be exactly %d charcters", chacha20poly1305.KeySize)
	}

	maker := &PasetoMaker{
		paset: paseto.NewV2(),
		symmetricKey: []byte(symmetricKey),
	}
	return maker, nil
}


func (m *PasetoMaker) CreateToken(username string, duration time.Duration) (string, error) {
	payload, err := model.NewPayload(username, duration)
	if err != nil {
		return "", err
	}
	return m.paset.Encrypt(m.symmetricKey, payload, nil)
}

func (m *PasetoMaker) VerifyToken(token string) (*model.Payload, error) {
	payload := &model.Payload{}

	err := m.paset.Decrypt(token, m.symmetricKey, payload, nil)
	if err != nil {
		println(err.Error())
		return nil, err
	}

	return payload, nil
}