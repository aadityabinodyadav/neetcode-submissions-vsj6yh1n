
type Solution struct{}

func (s *Solution) Encode(strs []string) string {
	var result strings.Builder
	for _, str := range strs {
		result.WriteString(strconv.Itoa(len(str)))
		result.WriteString("#")
		result.WriteString(str)
	}
	return result.String()
}

//"3#abc4#defg0#"

func (s *Solution) Decode(encoded string) []string {
	var result []string
	i := 0
	for i < len(encoded) {
		j := i
		for encoded[j] != '#' {
			j++
		}

		length, _ := strconv.Atoi(encoded[i:j])
		word := encoded[j+1: j+1+length]

		result = append(result, word)
		i = j+1+length


	}

	return result
}
