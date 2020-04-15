// const slowBubble = (arr) =>{
//     // key is to shrink the number of comparisons each time
//     for(let i = arr.length; i > 0; i-=1){
//         for(let j = 0; j< i - 1; j+=1){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1]= temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(slowBubble([28, 16, 4, 23, 12, 22, 9]));

const fasterBubble = (arr) => {
  //optimized with noSwaps variable to ensure that a nearly sorted array, once sorted after a couple steps, wont have to keep checking
  //bc its already sorted
  let noSwaps;
  for (let i = arr.length; i > 0; i -= 1) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j += 1) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};
console.log(fasterBubble([28, 16, 4, 23, 12, 22, 9]));
