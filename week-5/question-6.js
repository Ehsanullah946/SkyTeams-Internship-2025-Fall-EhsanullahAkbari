// Author: Ehsan;
// Data : 2025-12-09
// 6. Remove Adjacent Duplicates
// Problem:
// Given a string s, repeatedly remove adjacent pairs of equal characters
// Example:
// Input: "abbaca"
// Output: "ca"
import { Stack } from "./stack.js";

const stack = new Stack();

export const removeAdjacentDuplicate=(array) => {
     
    for (let i = 0; i < array.length; i++) {
        if (!stack.isEmpty() && stack.peek() === array[i] ) {
            stack.pop();
        } else {
            stack.push(array[i]);
        }
    }
    let remain = "";
    while (!stack.isEmpty()) {
        remain = stack.pop() + remain;
    }
    return remain;
}
console.log(removeAdjacentDuplicate("abbaca"));