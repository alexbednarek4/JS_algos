/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 
Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output

[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 */

/**
 * initialize your data structure here.
 * Layed out by Leetcode, not using Class syntax
 */
var MinStack = function() {
    this.storage = [];
    this.index = 0;
    this.min = Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (x < this.min) this.min = x;
    this.storage.push(x);
    this.index += 1;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.storage.pop(this.index-=1)
    if(this.min === popped) this.min = Math.min(...this.storage)
    this.index -= 1;
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.storage.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};


const minStack = new MinStack();
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin())
