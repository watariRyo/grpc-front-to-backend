package time

import "time"

var jst *time.Location

func init() {
	var err error
	jst, err = time.LoadLocation("Asia/Tokyo")
	if err != nil {
		panic(err)
	}
}

type Clock interface {
	Now() time.Time
	Parse(layout, value string) (time.Time, error)
}

type realClock struct {
	location *time.Location
}

func NewRealClock(loc time.Location) Clock {
	return &realClock{location: &loc}
}

func NewClockJST() (Clock, error) {
	return NewRealClock(*jst), nil
}

func (c realClock) Now() time.Time {
	return time.Now().In(c.location)
}

func (c realClock) Parse(layout string, value string) (time.Time, error) {
	return time.ParseInLocation(layout, value, c.location)
}

type dummyClock struct {
	now func() time.Time
}

func (c dummyClock) Now() time.Time {
	return c.now()
}

func (c dummyClock) Parse(layout string, value string) (time.Time, error) {
	return time.ParseInLocation(layout, value, c.Now().Location())
}

func NewDummyClock(f func() time.Time) Clock {
	return &dummyClock{now: f}
}

func NewFixedClock(t time.Time) Clock {
	return NewDummyClock(
		func() time.Time { return t },
	)
}