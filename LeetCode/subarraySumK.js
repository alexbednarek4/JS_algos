/**
 * 
 *Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2} nums 
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    // input: Array of nums, target sum K
    // Output: Number of continuous subarrays
    // Utilize hashmap
    const cache = {0:1};
    let sum = 0;
    let current = 0;
    let subCount = 0;
    // If currentVal - k === k
        //
    for (let num of nums) {
        sum += num;
        let diff = sum - k;
        if(cache[diff]) {
            subCount += cache[diff];
        }if(cache[sum]) {
            cache[sum] += 1;
        }else{
            cache[sum] = 1;
        }
    }
    return subCount;
};

