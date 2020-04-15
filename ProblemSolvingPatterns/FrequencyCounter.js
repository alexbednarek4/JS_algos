// /**
//  * Write a function called 'same', which accepts two arrays.
//  * The function should return true if every value in the array
//  * has its corresponding value squared in the second array.
//  * The frequency of the values must be the same.
//  *
//  *
//  */

//  //arr1 = [1, 2, 3, 2, 5]
//  //arr2 = [1, 4, 9, 4, 25]
//  function same(arr1, arr2) {
//      // if both arrays do not have same length, return false immediately
//     if(arr1.length !== arr2.length) return false;
//     // utilize two cache objects that correspond to each array
//     const cache1 = {};
//     const cache2 = {};
//     // iterate over the first array
//     // create keys on the cache objects
//     for(let val of arr1) {
//         cache1[val] = (cache1[val] || 0) + 1;
//     }
//     for(let val of arr2) {
//         cache2[val] = (cache2[val] || 0) + 1;
//     }
//     console.log(cache1);
//     console.log(cache2);

//     // now for frequency and number logic
//     for(let key in cache1) {
//         if (!(key ** 2 in cache2)) {
//             return false;
//         }
//         if(cache2[key**2] !== cache1[key]){
//             return false;
//         }
//     }
//     return true;
//  }
//  console.log(same([1, 2, 3, 2, 5], [1, 4, 9, 4, 25]));

//  **
//   *
//   * Check if anagram given two strings
//   */

const ifAnagram = (str1, str2) => {
  // input: two strings
  // output: boolean
  // edge cases
  // approach
  const cache = {};
  // first determine if both strings are of equal length, if not return false
  if (str1.length !== str2.length) return false;
  // create cache for the first input string
  for (let i = 0; i < str1.length; i += 1) {
    // this cache will identify each letter and the frequency of each letter
    if (cache[str1[i]]) {
      cache[str1[i]] += 1;
    } else {
      cache[str1[i]] = 1;
    }
  }
  // now iterate through string two
  // can't find letter or letter is 1 then not an anagram
  for (let j = 0; j < str2.length; j += 1) {
    if (!cache[str2[j]]) {
      return false;
    } else {
      cache[str2[j]] -= 1;
    }
  }
  return true;
};
console.log(ifAnagram("lamp", "mapl"));


