// const fibonacci = (num) => {
//     if(num <= 2) {
//         return 1;
//     }
//     return fibonacci(num - 1) + fibonacci(num - 2);
//}

// We can improve performance by using memoization
// implemented with Map data structure as a memo object
const newFib = (n, memo = new Map()) => {
    if(memo.get(n) !== undefined) {
        return memo.get(n)
    }
    if(n <= 2) {
        return 1
    }
    let result = newFib(n-1, memo) + newFib(n-2, memo)
    memo.set(n, result)
    return result
}
console.log(newFib(7))