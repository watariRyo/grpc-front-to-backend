package model

type UserTag struct {
	ID         int64
	UserID     string
	TagName    string
	HasGroup   bool
	GroupID    int64
	GrantLimit string
}
