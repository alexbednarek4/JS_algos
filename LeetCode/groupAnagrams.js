/**
 * Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 */
// Time complexty: O(NWLogN)
// Must optimize
 function groupAnagrams(strs){
     let cache = {}
     for (let str of strs){
        let sortedKey = str.split('').sort().join('') //aet
        // if(!cache[sortedKey]){
        //     cache[sortedkey] = [srt]
        // }
        (!cache[sortedKey]) ? cache[sortedKey] = [str] : cache[sortedKey].push(str)
     }

     return Object.values(cache)
 }