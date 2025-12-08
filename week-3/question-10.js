
// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 10 of week-3 finding prime number
// example

// input :  32; 
// output: false

export const primeNumber = (number) => {
    let isPrime = true;
    if (number < 2) isPrime = false;
    for (let i = 2; i < number; i++){
        if (number % i === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}


console.log(primeNumber(2));