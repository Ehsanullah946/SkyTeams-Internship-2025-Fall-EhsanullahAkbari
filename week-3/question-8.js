// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 8 of week-3 find the sum number in array
// example

// input :  [33,4,5];
// output: 42
export const sumElement = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}



