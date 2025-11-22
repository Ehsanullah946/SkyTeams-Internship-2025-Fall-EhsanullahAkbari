// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 finding Even and Odd number
// example
// input :  4
// output:  Even

export const findEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
     }
}
console.log(findEvenOrOdd(1));