package db

import (
	"context"
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/watariRyo/balance/server/domain/model"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db/models"
	pb "github.com/watariRyo/balance/server/proto"
)

type IncomeAndExpenditureRepositoryTestSuite struct {
	suite.Suite
	conn repository.DBConnection
	ctx  context.Context
	ur   UserRepository
	utr  UserTagRepository
	ier  IncomeAndExpenditureRepository
}

func (s *IncomeAndExpenditureRepositoryTestSuite) SetupSuite() {
	s.conn = testConnection(s.T())
	s.ctx = context.Background()
	s.ur = UserRepository{}
	s.utr = UserTagRepository{}
	s.ier = IncomeAndExpenditureRepository{}
}

func (s *IncomeAndExpenditureRepositoryTestSuite) TearDownTest() {
	truncateTables(s.T())
}

func TestSuiteIncomeAndExpenditureRepositoryTestSuite(t *testing.T) {
	suite.Run(t, new(IncomeAndExpenditureRepositoryTestSuite))
}

func (s *IncomeAndExpenditureRepositoryTestSuite) Test_IncomeAndExpenditureRepositoryTestSuite_Insert() {
	t := s.T()

	req := &pb.RegisterUserRequest{
		UserId:   "dummy-1234",
		Password: "dummy-pass",
	}

	adminTag1 := models.AdminTag{
		TagName:    "dummy-tag-In",
		GrantLimit: "INCOME",
	}
	err := adminTag1.Insert(s.ctx, s.conn, boil.Infer())
	assert.Nil(t, err)
	adminTag2 := models.AdminTag{
		TagName:    "dummy-tag-Ex",
		GrantLimit: "EXPENDITURE",
	}
	err = adminTag2.Insert(s.ctx, s.conn, boil.Infer())
	assert.Nil(t, err)

	user, err := s.ur.Insert(s.ctx, s.conn, req)
	assert.Nil(t, err)

	err = s.utr.InitInsert(s.ctx, s.conn, user.UserID)
	assert.Nil(t, err)

	got, err := s.ier.Insert(s.ctx, s.conn, &model.IncomeAndExpenditure{
		UserID:         req.UserId,
		Name:           "dummy",
		Amount:         100,
		OccurrenceDate: "20230101",
		UserTagID:      1,
		Classification: "INCOME",
	})
	assert.Nil(t, err)

	want := &model.IncomeAndExpenditure{
		UserID:         req.UserId,
		Name:           "dummy",
		Amount:         100,
		OccurrenceDate: "20230101",
		UserTagID:      1,
		Classification: "INCOME",
	}

	if d := cmp.Diff(got, want, cmpopts.IgnoreFields(model.IncomeAndExpenditure{}, "ID")); len(d) != 0 {
		t.Errorf("differs: (-got +want)\n%s", d)
	}
}
