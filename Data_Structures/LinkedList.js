/**
 * Lists compared with Arrays
 * 
 * List:
 *  No indexes
 *  Connected via nodes with a 'next' pointer
 *  Random access not allowed
 * 
 * Array:
 *  Indexed
 *  Insertion and Deletion are expensive
 *  Can be accessed via specific index
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}