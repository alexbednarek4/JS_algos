/**
 * Given an array of strings, capitalize the first letter of each word
 * ['dog', 'car', 'sports']
 */
const firstCaps = (arr) => {
    if(arr.length === 1) return [arr[0].toUpperCase()];
    let res = firstCaps(arr.slice(0, -1));
        console.log(res);
    res.push(arr.slice(arr.length-1)[0].toUpperCase());
    return res;
}
console.log(firstCaps(['dog', 'car', 'sports']))
