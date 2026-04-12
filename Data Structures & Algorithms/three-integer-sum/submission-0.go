
func isPalindrome(s string) bool {
	var cleaned strings.Builder

	for _, r := range s {
		if unicode.IsLetter(r) || unicode.IsNumber(r) {
			cleaned.WriteRune(unicode.ToLower(r))
		}

	}
	cleanString := cleaned.String()
	n := len(cleanString)
	for i:=0; i<= n-1; i++{
		if cleanString[i] != cleanString[(n-1)-i]{
			return false
		} 

	}

	return true

	

}
