// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 function counting the degits of integer number
// example
// input :  1234
// output:  4

export const countNumber = (number) => {
    let count = 0;
    while (number > 0) {
        number % 10;
        number = Math.floor(number / 10);
        count++
    }
    return count;
}

