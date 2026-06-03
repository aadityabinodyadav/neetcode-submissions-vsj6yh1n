class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map =  new Map();

        let i = 0;

        while (i < nums.length){
            let expected = target - nums[i];

            if(map.has(expected)){
                return [i, map.get(expected) ]
            }

            map.set(nums[i], i)
            i++
        }
    }
}
