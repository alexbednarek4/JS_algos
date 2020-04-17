/**
 * Faster sorts generally tend to be around O(nlogn)
 * Ideas behind merge sort:
 *  Exploits the fact that arrays of length 0 or 1 are already sorted
 *  Works by splitting up an existing array into smaller arrays of 0 or 1 elements and then building them back up
 * 
 *  Create helper function that merges two sorted arrays
 *  Time: O(n + m)
 *  Space: O(n + m)
 */

const merge = (arr1, arr2) => {
    const returnArr = [];
    let i = 0;
    let j = 0;
    while( i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]){
            returnArr.push(arr1[i]);
            i+=1;
        }else{
            returnArr.push(arr2[j]);
            j+=1;
        }
    }
        while(i < arr1.length) {
            returnArr.push(arr1[i]);
            i+=1;
        }
        while(j < arr2.length) {
            returnArr.push(arr2[j]);
            j+=1;
        } 
    return returnArr;
}

const mergeSort = (arr) => {
    // break up array into halves until you have arrays of either length 0 or length 1
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle))
    // once you have those arrays, merge them to form sorted larger arrays until you are back at the length of the original array
    return merge(left, right);
}

console.log(mergeSort([10, 4, 23, 16, 20, 14, 25]))