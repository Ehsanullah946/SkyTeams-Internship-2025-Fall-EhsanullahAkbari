// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 function sum of the degits of integer number
// example
// input :  123
// output:  6

export const sumDegits = (number) => {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);

    }

    return sum;
}
