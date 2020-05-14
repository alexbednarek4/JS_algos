// DFS (pre, in, post order) and BFS

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(this.root === null) {
            this.root = node;
            return this;
        }else{
            let current = this.root;
            while(true) {
                if (value === current.value) return undefined; 
                if (value < current.value) {
                    if(current.left === null){
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else if (value > current.value){
                    if(current.right === null){
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if (value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right
            }else{
                found = true;
            }
        }
        return current;
    }
    BFS(root){
        let current = this.root
        const data = [];
        const queue = [current];

        while(queue.length) {
            current = queue.shift();
            data.push(current.value);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
        return data;
    }
    DFSPreOrder(){
        const data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        const data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value)
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        const data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}
const BST = new BinarySearchTree()

BST.insert(10)
BST.insert(8)
BST.insert(5)
BST.insert(14)
BST.insert(11)
//       10
//     8    14
//   5    11
//
// console.log(BST.BFS())
// console.log(BST.DFSPreOrder())
// console.log(BST.DFSPostOrder())
// console.log(BST.DFSInOrder())
