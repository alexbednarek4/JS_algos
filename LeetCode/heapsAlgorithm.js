// This algorithm will find all possible permutations of an iterable
// This function will be pure

const getPermutations = arr => {
    // input: array of values 
    // output: array of arrays of possible permutations
    const output = [];

    const swapInPlace = (arrToSwap, idx1, idx2) => {
        const temp = arrToSwap[idx1];
        arrToSwap[idx1] = arrToSwap[idx2];
        arrToSwap[idx2] = temp;
    }

    const generate = (n, heapArr) => {
        if(n === 1) {
            output.push(heapArr.slice());
            return;
        }
        for(let i = 0; i < n - 1; i += 1) {
            if(n % 2 === 0) {
                swapInPlace(heapArr, 1, n - 1);
            }else{
                swapInPlace(heapArr, 0, n - 1);
            }
            generate(n - 1, heapArr);
        }
    }
    generate(arr.length, arr.slice());
    return output;
}
console.log(getPermutations([1, 2, 3]))