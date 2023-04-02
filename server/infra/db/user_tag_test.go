package db

import (
	"context"
	"testing"

	"github.com/google/go-cmp/cmp"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
	"github.com/volatiletech/null/v8"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/watariRyo/balance/server/domain/repository"
	"github.com/watariRyo/balance/server/infra/db/models"
	pb "github.com/watariRyo/balance/server/proto"
)

type UserTagRepositoryTestSuite struct {
	suite.Suite
	conn repository.DBConnection
	ctx  context.Context
	ur   UserRepository
	utr  UserTagRepository
	gr   TagGroupRepository
}

func (s *UserTagRepositoryTestSuite) SetupSuite() {
	s.conn = testConnection(s.T())
	s.ctx = context.Background()
	s.ur = UserRepository{}
	s.utr = UserTagRepository{}
	s.gr = TagGroupRepository{}
}

func (s *UserTagRepositoryTestSuite) TearDownTest() {
	truncateTables(s.T())
}

func TestSuiteUserTagRepository(t *testing.T) {
	suite.Run(t, new(UserTagRepositoryTestSuite))
}

func (s *UserTagRepositoryTestSuite) Test_UserTagRepositoryTestSuite_List() {
	t := s.T()

	req := &pb.RegisterUserRequest{
		UserId:   "dummy-1234",
		Password: "dummy-pass",
	}

	user, err := s.ur.Insert(s.ctx, s.conn, req)
	assert.Nil(t, err)

	userTag1 := models.UserTag{
		UserID:     user.UserID,
		TagName:    "dummy-tag-In",
		GrantLimit: "INCOME",
	}
	err = userTag1.Insert(s.ctx, s.conn, boil.Infer())
	assert.Nil(t, err)

	tagGroup := models.TagGroup{
		UserID:    user.UserID,
		GroupName: "dummy-group",
	}
	tagGroup.Insert(s.ctx, s.conn, boil.Infer())
	assert.Nil(t, err)

	userTag2 := models.UserTag{
		UserID:     user.UserID,
		TagName:    "dummy-tag-Ex",
		GroupID:    null.Int64From(tagGroup.ID),
		GrantLimit: "EXPENDITURE",
	}
	err = userTag2.Insert(s.ctx, s.conn, boil.Infer())
	assert.Nil(t, err)

	got, err := s.utr.List(s.ctx, s.conn, user.UserID)
	assert.Nil(t, err)

	want1 := s.utr.toDomain(&userTag1)

	if d := cmp.Diff(got[0], want1); len(d) != 0 {
		t.Errorf("differs: (-got +want)\n%s", d)
	}

	want2 := s.utr.toDomain(&userTag2)

	if d := cmp.Diff(got[1], want2); len(d) != 0 {
		t.Errorf("differs: (-got +want)\n%s", d)
	}
}

func (s *UserTagRepositoryTestSuite) Test_UserTagRepositoryTestSuite_InitInsert() {
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

	_, err = models.UserTags(
		models.UserTagWhere.UserID.EQ(user.UserID),
		models.UserTagWhere.TagName.EQ(adminTag1.TagName),
	).One(s.ctx, s.conn)
	assert.Nil(t, err)

	_, err = models.UserTags(
		models.UserTagWhere.UserID.EQ(user.UserID),
		models.UserTagWhere.TagName.EQ(adminTag2.TagName),
	).One(s.ctx, s.conn)
	assert.Nil(t, err)
}
