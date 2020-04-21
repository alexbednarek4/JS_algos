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
    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
       this.length+=1;
       return this;
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let newTail = this.head;
        let current = this.head.next;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        //reassign tail as new tail
        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        // if you pop the only node from the LL
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
       let currentHead = this.head;
       this.head = currentHead.next;
       this.length -=1;
       return currentHead;
    }
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length+=1;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter+=1;
        }
        return current;
    }
    set(index, val){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unshift(val);
    }
}

const newLL = new LinkedList();
newLL.push('Hello');
newLL.push('There');
newLL.push('General');
newLL.push('Kenobi')
newLL.push('!')
newLL.unshift('First!!!');
// console.log(newLL);
// console.log(newLL.get(4));
newLL.set(3, 'Master');
// console.log(newLL.traverse());
console.log(newLL.get(5));
