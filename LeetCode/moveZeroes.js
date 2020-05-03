/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // edge cases
        // if nothing in array
        if(nums.length === 0) return nums
        // if only one num and its zero
        if(nums.length === 1 && nums[0] === 0) return nums
    
    // create index
    let index = 0;
    
    for(let i = 0; i<nums.length; i+=1){
        let num = nums[i]
        if(num !== 0){
            nums[index] = num
            index+=1
        }
    }
    for(let i = index; i<nums.length; i+=1){
        nums[i] = 0
    }
};