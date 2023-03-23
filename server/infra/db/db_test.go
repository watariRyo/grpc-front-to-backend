package db

import (
	"database/sql"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/watariRyo/balance/server/config"
	"github.com/watariRyo/balance/server/domain/repository"
)

func Test_NewDB(t *testing.T) {
	t.Run("have access to database", func(t *testing.T) {
		cfg, err := config.Load()
		assert.Nil(t, err)

		dbConnectionManager := NewConnectionManager(
			Username(cfg.Db.Username),
			Password(cfg.Db.Password),
			Host(cfg.Db.Host),
			Port(cfg.Db.Port),
			Schema(cfg.Db.Schema),
			DebugMode(cfg.Db.DebugMode),
		)
		conn, err := dbConnectionManager.Open()
		assert.Nil(t, err)

		_, ok := conn.(*sql.DB)
		assert.True(t, ok)
	})
}

func testConnectionManager(t *testing.T) *ConnectionManager {
	cfg, _ := config.Load()

	return NewConnectionManager(
		Username(cfg.Db.Username),
		Password(cfg.Db.Password),
		Host(cfg.Db.Host),
		Port(cfg.Db.Port),
		Schema("balance_test"),
		DebugMode(cfg.Db.DebugMode),
	)
}

func testConnection(t *testing.T) repository.DBConnection {
	cm := testConnectionManager(t)
	db, err := cm.Open()
	assert.Nil(t, err)

	return db
}

// func createDbCleaner(t *testing.T) dbcleaner.DbCleaner {
// 	cleaner := dbcleaner.New()
// 	cm := testConnectionManager(t)
// 	mysql := engine.NewMySQLEngine(cm.DSN())
// 	cleaner.SetEngine(mysql)
// 	println(cm.DSN())
// 	return cleaner
// }

func ptrTime(t time.Time) *time.Time {
	return &t
}
