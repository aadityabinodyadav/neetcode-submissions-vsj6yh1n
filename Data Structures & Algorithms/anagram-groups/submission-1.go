
func groupAnagrams(strs []string) [][]string {
    m := make(map[string][]string)
    for _, word := range strs {
        chars := []rune(word)
        sort.Slice(chars, func(i, j int) bool { return chars[i] < chars[j] })
        key := string(chars)
        m[key] = append(m[key], word)
    }
    var result [][]string
    for _, group := range m {
        result = append(result, group)
    }
    return result
}