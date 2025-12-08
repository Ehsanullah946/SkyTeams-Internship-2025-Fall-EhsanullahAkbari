// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 4 of week-3 find the factors all numbers
// example

// input :  12
// output: 1,2,3,4,6

export const numberFactors = (number) => {
    let array = [];
    for (let i = 0; i < number; i++){
        if (number % i === 0) {
            array.push(i);
       }
    }
    return array;

}

