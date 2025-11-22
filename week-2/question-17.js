// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 17 of week-2 function sum of natural number
// example
// input :   5

// output:   15   


export const sumNaturalNumber = (number) => {
    let result = 0;
    for (let i = 0; i <= number; i++){
         result += i;
    }
    return result;
}



