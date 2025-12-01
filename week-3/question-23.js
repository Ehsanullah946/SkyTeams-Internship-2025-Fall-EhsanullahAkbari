
// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 23 of week-3  factorial with recursion
// example
// input :  5
// output:  120
const factorial = (number) => {
    if (number <= 0) return 1;
    return factorial(number-1 ) * number
}

console.log(factorial(5))