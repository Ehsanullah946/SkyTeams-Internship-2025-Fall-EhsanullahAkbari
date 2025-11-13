// Author: Ehsanullah Akbari

// Date: 2025-10-12

// exercise 18 of week-2 function print a specific number multiply table
// example
// input :  4
// output: 
// 4: x 1: 4
// 4: x 2: 8
// 4: x 3: 12
// 4: x 4: 16
// 4: x 5: 20
// 4: x 6: 24
// 4: x 7: 28
// 4: x 8: 32
// 4: x 9: 36
// 4: x 10: 40
export const multiplyTableNumber = (number) => {

    for (let i = 1; i <= 10; i++) {
     console.log(`${number}: x ${i}: ${number * i}`);
    }
}
multiplyTableNumber(4);









