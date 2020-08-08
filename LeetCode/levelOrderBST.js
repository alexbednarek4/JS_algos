/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */
// Time: O(n) | Space: O(n)
var levelOrder = function(root) {
    // Edge/base cases
    if (!root) return [];
    
    // declare result array
    const resultArr = [];
    
    // declare queue, push root into queue
    const q = [];
    q.push(root);
    
    while(q.length > 0) {
        // Get length of queue
        queueLength = q.length
        // create an array to store each level's nodes
        const currentLevel = [];
        for (let i = 0; i < queueLength; i+=1) {
            
            let current = q.shift();
            console.log(current.val)
            currentLevel.push(current.val);

            if (current.left !== null){
                q.push(current.left);
            }
            if (current.right !== null){
                q.push(current.right);
            }
        }
        resultArr.push(currentLevel);
    } 
    return resultArr;
};

