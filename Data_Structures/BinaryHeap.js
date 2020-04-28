/**
 * Max Binary Heap:
 *  Each parent has two child nodes
 *  Value of parent node is always greater than children
 *  Parent is greater than children, but there are no guarantees between sibling nodes
 *  Binary heaps are compact as possible. All children of each node are as full as they can be
 *      and left children are filled out first
 */

 class MaxBinaryHeap {
     constructor(){
         this.values = [];
     }
     insert(value){
         this.values.push(value);
         this.bubbleUp();
     }
     bubbleUp(){
        let index = this.values.length-1;
        const element = this.values[index];
        while(index>0){
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
     }
 }
 const heap = new MaxBinaryHeap();
 heap.insert(55);
 heap.insert(40);
 heap.insert(30);
 heap.insert(38);
 heap.insert(45);
 heap.insert(41);
 console.log(heap)