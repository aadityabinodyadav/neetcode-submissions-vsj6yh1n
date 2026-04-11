
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	

	count := make(map[rune]int)

	for _,i := range s {
		count[i]++
	}

	for _,i := range t {
		count[i]--
	}

	for _,v := range count {
		if v!=0 {
			return false
		}
	}
	return true
}
