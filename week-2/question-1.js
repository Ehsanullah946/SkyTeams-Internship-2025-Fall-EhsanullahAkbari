// Author: Ehsanullah Akbari
// Date: 2025-10-11
// exercise 1 of week-2 swap the values of two variable without using a third variable
// example
// input : a=4 b=5
// output: a=5 b=4
export const swap = (a,b) => {
    [a, b] = [b, a];
   return `a=${a} b=${b}`
}
