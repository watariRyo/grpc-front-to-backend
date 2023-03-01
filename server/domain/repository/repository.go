package repository

type AllRepository struct {
	DBConnection 					DBConnection
	DBTransaction					DBTransaction
	UserRepository 					UserRepository
	UserTagRepository 				UserTagRepository
	GroupRepository 				GroupRepository
	IncomeAndExpenditureRepository 	IncomeAndExpenditureRepository
}