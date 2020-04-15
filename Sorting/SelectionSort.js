// finding smallest element and putting it at the beginning of the array
function selectionSort(arr){
// store first element as smallest value we've seen so far
// compare this item to the next item in the array until we find smaller num
// If a smaller number is found, designate that smaller number to be the new minimum and continue until you've reached end of array
// If the minimum is not the value(index) you began with, swap the two values
// Repeat this with next el until the array is sorted
for(let i = 0; i< arr.length; i+=1){
    let smallest = i;
    for(let j = i+1; j<arr.length; j+=1){
        if(arr[j] < arr[smallest]){
            smallest = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
}
return arr;
}
console.log(selectionSort([23, 34, 16, 19, 27, 24, 30, 28]));