

// function sameFrequency(num1, num2){
//     // good luck. Add any arguments you deem necessary.
//     // create caches
//     const cache = {};
//     const cache2 = {};
//     // new variables for nums to string
//     const strNum= num1.toString();
//     const strNum2 = num2.toString();
//     if(strNum.length !== strNum2.length) return false;
    
//     // create cache for first num
//     for(let i = 0; i<strNum.length; i += 1) {
//         cache[strNum[i]] = (cache[strNum[i]] || 0) + 1;
//     }
//     for(let j = 0; j<strNum2.length; j += 1) {
//         cache2[strNum2[j]] = (cache2[strNum2[j]] || 0) + 1;
//     }
//     for(let key in cache) {
//         if(cache[key] !== cache2[key]) return false;
//     }
//     return true;
// }
// console.log(sameFrequency(2113, 3121));

/**
 * Implement a function that accepts a variable number of arguments and checks whether there are any duplicates in the
 * args passed in. Solve using multiple pointers.
 * Restrictions: O(n logn) Time and O(1) Space
 */

 const checkDups = (...args) => {
 // input: series of nums, strings
 // output: boolean

 args.sort((a, b) => a < b);
if(args.length === 0 || args.length === 1) return false;
 let i = 0;
 let j = 1;
 // iterate over arguments
 while(j < args.length) {
     if(args[i] === args[j]){
         return true;
     }else{
         i+=1;
         j+=1;
     }
 }
 return false;
 }
 console.log(checkDups('a', 'b', 'c', 'd'))

 /**
  * One liner
  * 
  function checkDups(){
      return new Set(arguments).size !== arguments.length
  }
  */
