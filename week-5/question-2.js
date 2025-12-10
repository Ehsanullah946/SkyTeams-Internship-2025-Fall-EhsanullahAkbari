// Ehsanullah Akbari
// Date: 2025-12-09
// 2. Min Stack 
// Problem: 
// Design a stack that supports: 
// • push(x) 
// • pop() 
// • top() 
// • getMin() → returns the minimum element in O(1) 
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(item) {
      this.stack[this.stack.length] = item;      
        if (this.minStack.length === 0 || item <= this.getMin()) {
             this.minStack[this.minStack.length]= item;
        }                           
    }
    pop() {
        return this.stack[this.stack.length--];
    }
    getMin() {
       return  this.minStack[this.minStack.length-1];
    }

    printMinStack() {
        let newArray = [];
       for (let i = 0; i < this.stack.length; i++) {
          newArray.push(this.stack[i])
        }
        return newArray;
   }

}
const stack = new MinStack();

stack.push(20);

stack.push(10);
(stack.pop());
stack.push(11);
stack.push(5);
stack.push(50);
console.log(stack.printMinStack());
console.log(stack.getMin());



