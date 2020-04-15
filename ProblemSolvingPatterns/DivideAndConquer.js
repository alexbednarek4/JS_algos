/**
 * This pattern involves dividing dataset up into smaller chunks and then repeating a process with a subset of data
 * This patter can tremendously decrease time complexity
 */
// Implement binary search
function binarySearch(array, value) {
    let min = 0; 
    let max = array.length - 1;
    while(min <= max) {
        let middle = Math.floor((min + max)/2);
        let currentElement = array[middle];
        if(array[middle] < value ) {
            min = middle + 1;
        } else if (array[middle] > value) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 12, 14, 16, 20, 44, 46, 47, 48, 49, 60], 46));