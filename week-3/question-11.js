// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 11 of week-3 print prime number
// example

// input :  5;
// output: 2,3,5


export const printPrime = (number) => {
    let primes = [];
    for (let i = 2; i <= number; i++){
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++){
            if (i % j === 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) primes.push(i);
    }   
    return primes;
}

