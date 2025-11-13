
// Author: Ehsanullah Akbari

// Date: 2025-10-11

// exercise 2 of week-2 reverse the integer number
// example

// input :  1234
// output: 4321

export const revNumber = (number) => {
    let rev = 0;
    while (number > 0) {
        rev = rev * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return  rev;
}

