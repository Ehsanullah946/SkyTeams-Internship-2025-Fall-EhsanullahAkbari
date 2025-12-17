// Author: Ehsanullah Akbari

// Date: 2025-10-16

// exercise 14  Find factorial of a number 
// example

// input :  5;
// output: 120

export const factorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++ ){
        result *= i; 
    }
    return result;
}
