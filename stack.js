/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    if (!this.first) 
      this.first = this.last = newNode;
    else {
      let nextNode = this.first;
      this.first = newNode;
      this.first.next = nextNode;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // for empty stack
    if (!this.first) throw new Error("Stack was already empty");
    
    let val = this.first.val;
    this.size -= 1;
    
    //for single element stack
    if (this.first === this.last) {
      this.first = this.last = null
      return val
    }
    
    // for 2+ elements in stack
    this.first = this.first.next
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
