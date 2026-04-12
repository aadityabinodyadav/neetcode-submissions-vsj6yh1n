
//Input: nums = [2,20,4,10,3,4,5]

// Output: 4

func longestConsecutive(nums []int) int {

	set := make(map[int]struct{})

	for _, num := range nums {
		set[num] = struct{}{}
	}

	streak := 0

	for num := range set{
		if _,found := set[num-1] ; !found{
			current :=1
			next := num+1

			for {
			  if _,ok := set[next]; ok {
					current++
					next++
			  } else {
				break
			  }
			}

			if current > streak{
				streak = current
			}
		}
	}



	return streak
}
