func getConcatenation(nums []int) []int {
    result := make([]int, 0, len(nums)*2)

    result = append(result, nums...)
    result = append(result, nums...)

    return result
}