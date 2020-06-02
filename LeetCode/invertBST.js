/**
 * Invert BST without Stack
 * 
 * class Node {
    constructor(){
        this.val = null;
        this.left = null;
        this.right = null;
    }
}
 */

const invert = (root) => {
    if (!root) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invert(root.left);
    invert(root.right)
    
    return root;
}

