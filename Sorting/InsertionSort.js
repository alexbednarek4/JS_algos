const insertionSort = (arr) => {
    for(let i = 1; i<arr.length; i+=1) {
        let current = arr[i];
        // let j = i-1;
        for( let j=i-1; j>=0 && arr[j] > current; j-=1 ) {
            console.log(arr);
            arr[j+1] = arr[j];
            arr[j] = current;
            console.log(arr);
        }
    }
    
    return arr;
}
console.log(insertionSort([16, 4, 11, 8, 12, 21, 2]))