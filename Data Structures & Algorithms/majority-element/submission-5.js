class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let sortedarray = nums.sort((a,b) => a-b)

        return sortedarray[Math.floor(sortedarray.length/2)]
    }
}
