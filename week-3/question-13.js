// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 13 of  Power of a number (without built-in function)
// example

// input :  2,5;
// output: 32

export const powerNumber = (base,power) => {
    let result = 1;
    for (let i = 1; i <= power; i++){
        result = result * base;
    }
    return result;
}

