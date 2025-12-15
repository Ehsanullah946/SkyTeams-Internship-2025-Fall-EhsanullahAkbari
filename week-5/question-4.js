
import { Stack } from "./stack.js";

export const reversePolishNoation = (arr) => {
    let stack = new Stack();
    let operator = ["-", "+", "*", "/"];

    for (let i = 0; i < arr.length; i++) {
        if (!operator.includes(arr[i])) {
            stack.push(Number(arr[i])); 
        } else {
            let b = stack.pop();
            let a = stack.pop();
            let result;
            switch (arr[i]) {
                case "+":
                    result = a + b;
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;  
                case "/":
                    result = (a / b);
                    break;  
            }
            stack.push(result);
        }   
    }
    return stack.pop();
}


console.log(reversePolishNoation(["2", "1", "4", "+", "3", "*"])); 