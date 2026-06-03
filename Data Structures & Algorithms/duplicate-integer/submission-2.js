class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        /*
        const freq = {};

        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
            if (freq[num] === 2) return true;
        }

        return false;
        -> we are tracking frequency meaning, memory little higher and intent is more for frequency so set is a better option

        */
        let unique = new Set();

        for(let num of nums){
            if(unique.has(num)){ return true }
            else { unique.add(num) }
        }

        return false
    }
}
