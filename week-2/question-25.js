// Author: Ehsanullah Akbari
// Date: 2025-10-12

// exercise 2 of week-2 function LCM of values
// example
// input :  12,18
// output: 36
import { GCD } from "./question-24.js";
export const LCM = (a, b) => {
    return (a * b) / GCD(a, b);
}



