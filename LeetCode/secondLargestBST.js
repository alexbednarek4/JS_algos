/**
 * Find the second largest value in a BST
 *  Time:
 *  Space:
 */

 function findLargest(root){
    let current = root;
    while(current){
        if(!current.right) return current.value;
        current = current.right;
    }
 }
 function findSecondLargest(root){
    // edge case
    if(!root || (!root.left && !root.right)){
        throw new Error('Tree must have at least two nodes.')
    }
    let current = root;
    while(current){
        // Case: Current is largest and has a left subtree
        // 2nd largest is the largest in that left subtree
        if(current.left && !current.right){
            return findLargest(current.left);
        }
        // Case: Current is parent of largest, and largest has no children, so current is second largest
        if(current.right && !current.right.left && !current.right.right){
            return current.value;
        }
        current = current.right
    }
 }