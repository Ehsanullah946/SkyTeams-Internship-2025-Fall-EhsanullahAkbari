

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(item) {
        this.stack[this.stack.length] = item;      
        if (this.minStack.length === 0 || item <= this.getMin()) {
            this.minStack[this.stack.length]= item;
        }                           
    }
    getMin() {
        return minStack[this.minStack.length];
    }
}


const stack = new Stack();

stack.push(4);
stack.push(10);
stack.push(11);

