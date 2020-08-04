var permute = function(nums) {
    // define return array
    const perms = []
    // Swap func
     const swap = (array, a, b) => {
        temp = array[a]
         array[a] = array[b]
         array[b] = temp
    }
    // define helper method 
    const permHelper = (i, array, permutations) => {
        if (i === array.length-1) {
            permutations.push(array.slice())
        } else {
            for (let j = i; j<array.length; j += 1) {
                swap(array, i, j)
                permHelper(i+1, array, permutations)
                swap(array, i, j)
            }
        }
        return permutations
    }
       
    // Invoke helper method
    return permHelper(0, nums, perms)
}
const {log} = console
log(permute([1, 2, 3]))