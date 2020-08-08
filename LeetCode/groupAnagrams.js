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
function groupAnagrams(strs) {
  let cache = {};
  for (let str in strs) {
    // sort each string alphabetically
    let sortedKey = strs[str].split("").sort().join(""); //aet

    // if the sorted key is not in the cache
    !cache[sortedKey]
      ? (cache[sortedKey] = [strs[str]])
      : cache[sortedKey].push(strs[str]);
  }
  console.log(cache)
  return Object.values(cache);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
