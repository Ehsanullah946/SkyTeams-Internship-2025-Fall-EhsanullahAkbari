// Author: Ehsanullah Akbari

// Date: 2025-10-11

// exercise 2 of week-3 reverse the integer number
// example

// input :  1234
// output: 4321

export const reverseNumber = (number) => {
    let revers = 0;
    while (number > 0) {
         revers = revers * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    return revers;
}
