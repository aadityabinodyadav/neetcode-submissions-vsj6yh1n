class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {

            //why not splice? splice does is, makes another array and fills the data from the original to it.
            //so

            let k =0;

            for ( let i =0; i< nums.length; i++){
                if(nums[i] !== val){
                    nums[k] = nums[i];
                    k ++ 
                }
            }
        return k
    }
}
