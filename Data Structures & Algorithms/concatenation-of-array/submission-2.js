class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // if done return [...nums, ...nums], creates iterator and loops over twice so is slow meaning first spread and second spread separately -> O(n) and merge 0(n) so,
        const n = nums.length
        let res = new Array(n*2);

        for(let i=0; i < n; i++){
            res[i] = nums[i];
            res[i+n] = nums[i];
        }

        return res


    }
}
