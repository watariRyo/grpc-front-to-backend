package util

import (
	"testing"

	"github.com/stretchr/testify/require"
)

type containsTest struct {
	ID int
	Name string
}

func TestContains(t *testing.T) {
	got := Contains([]int32{1, 2, 3, 4}, 4)
	require.Equal(t, got, true)

	got = Contains([]int32{1, 2, 3, 4}, 5)
	require.Equal(t, got, false)

	got = Contains([]string{"hoge", "test", "dummy"}, "hoge")
	require.Equal(t, got, true)

	got = Contains([]string{"hoge", "test", "dummy"}, "foo")
	require.Equal(t, got, false)

	testList := []containsTest {
		{
			ID: 1,
			Name: "Bob",
		},
		{
			ID: 2,
			Name: "John",
		},
		{
			ID: 3,
			Name: "Alice",
		},
	}
	test := containsTest {
		ID: 1,
		Name: "Bob",
	}
	got = Contains(testList, test)
	require.Equal(t, got, true)
	
	test = containsTest {
		ID: 1,
		Name: "Alice",
	}
	got = Contains(testList, test)
	require.Equal(t, got, false)

	test = containsTest {
		ID: 2,
		Name: "Bob",
	}
	got = Contains(testList, test)
	require.Equal(t, got, false)
}