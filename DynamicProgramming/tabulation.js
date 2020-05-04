/**
 * Storing the result of in a 'table' (some sort of data structure, array?)
 * Usually done iteratively
 * Gives us better space complexity
 */
const fib = (n) => {
    if(n<=2) {
        return 1
    }
    // keep in mind arrays in JS are dynamically sized. This is not the case in other languages
    const fibNums = [0, 1, 1]
    for(let i = 3; i<n.length; i+=1) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}

