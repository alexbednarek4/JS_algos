/**
 * 
 * @param {} array 
 *  iterate through the array
 *  if the sum of two numbers are equal to zero, return the pair of numbers in an array
 *  one pointer begins at the start of the array
 *  one pointer begins at the end of the array
 *  if the left pointer is ever equal to the right within the array, we know there isnt a pair
 */

/**
 * Average Pair
 */

// function averagePair(array, num){
//     // add whatever parameters you deem necessary - good luck!
//     if(array.length === 0) return false;
//       let i = 0;
//       let j = array.length - 1;
//       while(i<j) {
//           let average = ((array[i] +array[j]) / 2);
//           if(average === num){
//               return true;
//           }else if(average<num){
//               i += 1;
//           }else{
//               j -= 1;
//           }
//           }
//            return false;
//       }
     

// const sumZero = (array) => {
//     let leftPointer = 0;
//     let rightPointer = array.length - 1;
//     while(leftPointer < rightPointer) {
//         let sum = array[leftPointer] + array[rightPointer];
//         if(sum === 0) {
//             return [array[leftPointer], array[rightPointer]];
//         } else if(sum < 0) {
//             leftPointer += 1;
//         }else{
//             rightPointer -= 1;
//         }
//     }
//     return false;
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

/**
 * Implement a function that returns the number of unique numbers found in input array
// * This only works if the array is sorted 
 */

//  const uniqueVals = (arr) => {
//     if(arr.length === 0) return 0;
//     let i = 0;
//     // j will loop only once through array
//     // each time, we will compare value of i to value of j
//     for(let j = 1; j<arr.length; j += 1) {
//         if(arr[i] !== arr[j]) {
//             i += 1;
//             arr[i] = arr[j];
//         }
//         console.log(i,j);
//     }
//     return i + 1;
//  }
//  console.log(uniqueVals([1, 1, 1, 1, 2, 3, 3, 4, 5, 5]));

