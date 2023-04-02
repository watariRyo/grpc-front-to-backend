package db

import (
	"context"
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserRepositoryTestSuite struct {
	suite.Suite
	conn repository.DBConnection
	ctx  context.Context
	ur   UserRepository
}

func (s *UserRepositoryTestSuite) SetupSuite() {
	s.conn = testConnection(s.T())
	s.ctx = context.Background()
	s.ur = UserRepository{}
}

func (s *UserRepositoryTestSuite) TearDownTest() {
	truncateTables(s.T())
}

func TestSuiteUserRepository(t *testing.T) {
	suite.Run(t, new(UserRepositoryTestSuite))
}

func (s *UserRepositoryTestSuite) Test_UserRepositoryTestSuite_Insert() {
	t := s.T()

	req := &pb.RegisterUserRequest{
		UserId:   "dummy-1234",
		Password: "dummy-pass",
	}

	got, err := s.ur.Insert(s.ctx, s.conn, req)
	assert.Nil(t, err)

	want := &model.User{
		UserID:           req.UserId,
		IsPrivacyChecked: true,
	}

	if d := cmp.Diff(got, want, cmpopts.IgnoreFields(model.User{}, "Password")); len(d) != 0 {
		t.Errorf("differs: (-got +want)\n%s", d)
	}

}

func (s *UserRepositoryTestSuite) Test_UserRepositoryTestSuite_Login() {
	t := s.T()

	registerReq := &pb.RegisterUserRequest{
		UserId:   "dummy-1234",
		Password: "dummy-pass",
	}

	loginReq := &pb.LoginUserRequest{
		UserId:   "dummy-1234",
		Password: "dummy-pass",
	}

	_, err := s.ur.Insert(s.ctx, s.conn, registerReq)
	assert.Nil(t, err)

	got, err := s.ur.Login(s.ctx, s.conn, loginReq)
	assert.Nil(t, err)

	want := &model.User{
		UserID:           loginReq.UserId,
		IsPrivacyChecked: true,
	}

	if d := cmp.Diff(got, want, cmpopts.IgnoreFields(model.User{}, "Password")); len(d) != 0 {
		t.Errorf("differs: (-got +want)\n%s", d)
	}
}
