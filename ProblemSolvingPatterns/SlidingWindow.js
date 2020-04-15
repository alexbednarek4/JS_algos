/**
 * This pattern involves creating a window which can either be an array or number from one position to another
 * Depending on circumstances, the window either increases or closes and a new window is created
 * Very useful for keeping track of a subset of data in an array/string
 */

/**
 //* Min sub array
 * Return minimal length of contiguous subarray of which the sum is greater than or equal to the number passed 
 in as an argument. If there isn't one, return 0
 */
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
    return minLen === Infinity ? 0 : minLen;
  }


/**
// * isSubsequence
 * @param str1 
 * @param str2
 * Time: O(n)
 * Space: O(1)
 */
// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
//   }
//   console.log(isSubsequence('abc','abracadabra'))

 /**
  * Write function maxSubarraySum which accepts an array of integers and a number n
  * The function should calculate the sum of n consecutive elements in the array
 // * Poor time complexity O(n^2)
  */

//   function maxSubarraySum(array, n) {
//     // edge cases
//     if(array.length === 0) return null;
//     if (n > array.length) return null;
//     let max = -Infinity;
//     for(let i = 0; i<array.length-n+1; i += 1) {
//         let temp = 0;
//         for(let j = 0; j < n; j += 1) {
//             console.log(i)
//             console.log(j)
//             temp += array[i + j];
//             console.log(temp);
//         }
//         if(temp > max) {
//             max = temp;
//         }
//     }
//     return max;
//   }
//   console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));


/**
// * MaxSubArray 
// * refactored O(n)
 */

//  const maxSubArray = (array, n) => {
//     if(n > array.length) return null;
//     let maxSum = 0;
//     let tempSum = 0;
//     for(let i = 0; i<n; i += 1) {
//         maxSum += array[i];
//     }
//     tempSum = maxSum;
//     for(let j = n; j < array.length; j += 1) {
//         tempSum = tempSum - array[j - n] + array[j];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
//  }
//  console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));