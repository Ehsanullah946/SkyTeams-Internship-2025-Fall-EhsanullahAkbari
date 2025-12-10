// Author : Ehsanullah
// Date : Ehsanullah
// 1. Valid Parentheses
// Problem:
// Given a string containing only '(' , ')' , '{' , '}' , '[' , ']', determine if the string
// is valid.
// A valid string must have brackets closed in the correct order.
// Example:
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: fals
import { Stack } from "./stack.js";

const stack = new Stack();

export const isValidParentheses = (s) => {
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char]) {
            stack.push(char);
        }
        else {
            if (map[stack.pop()] !== char) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log(isValidParentheses("()[]{}")); 
console.log(isValidParentheses("[(())]")); 
console.log(isValidParentheses("(){}")); 
console.log(isValidParentheses("{{{{}}{}")); 


