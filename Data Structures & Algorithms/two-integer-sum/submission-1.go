func twoSum(nums []int, target int) []int {

	m:= make(map[int]int)

	for i, num := range nums {
		want := target - num

		 j, found := m[want]

		 if found {
			return []int{j,i}
		 }

		 m[num] = i

	}

	return nil
}
