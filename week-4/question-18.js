// Author : Ehsanullah
// Date: 2025-12--04

// 18. Implement a Stack (Array-Based)
// Operations: push, pop, peek, isEmpty.

class Stack {
    constructor(items = []) {
        this.items = items;  
    }
    push(element) {
       this.items[this.items.length++] = element;
    }
    pop() {
        return this.items[this.items.length--];
    }
    peek() {
        return this.items[this.items.length];
    }
    isEmpty() {
        return this.items[this.items.length] ==-1;
    }
    printStack() {
        let str = "";   
        for (let i = 0; i <= this.items.length-1; i++)
            str += this.items[i] + "   ";
        console.log(str);   
    }                       
}

