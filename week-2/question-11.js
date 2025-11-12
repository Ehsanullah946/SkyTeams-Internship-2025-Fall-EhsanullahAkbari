// Author: Ehsanullah Akbari
// Date: 2025-10-12

// exercise 2 of week-2 a simple calculator 

// example
// input :  3,4,"+"
// output: 7
export const calculator = (a, b, operator) => {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "not defined"
    }
}

