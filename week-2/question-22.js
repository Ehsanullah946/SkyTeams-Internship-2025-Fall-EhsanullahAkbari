// Author: Ehsanullah Akbari

// Date: 2025-10-12

// exercise 22 of week-2 Input start and end values, print all even numbers between them.
// example
// input :  1,10
// output:
// 2
// 4
// 6
// 8
// 10

export const printEvenNumber = (start, end) => {
   const evenNumbers = [];
   for (let i = start; i <= end; i++) {
       if (i % 2 === 0) {
           evenNumbers.push(i);
       }
   }    
}

