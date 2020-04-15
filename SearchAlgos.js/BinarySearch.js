/**
 * Given a sorted array and a value, implement binary search. if value not found, return -1
 */

 const binarySearch = (arr, value) => {
     // create variables for our three pointers
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end)/2);
    // while the middle pointer is not equal to the value AND our starting pointer is less than or equal to our end pointer
    while(arr[middle] !== value && start <= end) {
        console.log(start, middle, end);
        // if the value is less than our middle pointer
        if(value < arr[middle]) {
            //our end becomes middle - 1
            end = middle - 1;
        }else {
            // otherwise, our value is greater than our middle pointer, so start becomes middle + 1
            start = middle + 1;
        }
        // each check, we reassign middle pointer based on the new start and end pointers
        middle = Math.floor((start + end)/2);
    }
    // same thing as return arr[middle] === value ? middle : -1
    // reads if arr[middle] === value, then return middle, otherwise return -1
    if(arr[middle]===value){
        return middle;
    }
   return -1;
 }
 console.log(binarySearch([2, 3, 6, 7, 9, 11, 15, 19, 32, 34, 37, 41, 45, 50], 41));