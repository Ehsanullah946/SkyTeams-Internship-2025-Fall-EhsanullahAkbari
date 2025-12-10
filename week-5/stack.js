
 export class Stack {
    constructor(top=-1,array=[]) {
        this.top = top;
        this.array = array;
    }
    push(item) {
        return this.array[++this.top]=item;
    }
    isEmpty() {
        return this.top == -1;
    }
    size() {
        return this.top + 1;
    }
    gitMin() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        let min = this.array[0];
        for (let i = 1; i <= this.top; i++) {
            if (this.array[i] < min) {
                min = this.array[i];
            }
        }
    }
    pop() {
        if (this.isEmpty()) {   
            return "Stack is empty";
        }
        return this.array[this.top--];
    }
    peek() {
        if (this.isEmpty()) {   
            return "Stack is empty";
        }
        return this.array[this.top];
    }
     printStack() {
        let newArray =[];
          for (let i = 0; i <= this.array.length-1; i++) {
              newArray.push(this.array[i]);  
        }
        return newArray;
    }
    reverse() {
        let reversedArray = [];
        for (let i = this.array.length - 1; i >= 0; i--) {
            reversedArray.push(this.array[i]);
        }
        return reversedArray
    }
}






