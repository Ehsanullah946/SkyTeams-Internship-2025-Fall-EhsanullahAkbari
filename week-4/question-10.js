
// Author: Ehsanullah Akbari
// Date: 2025-11-30
// exercise 4 of week-4  Description: Return whether a string contains only unique chars.
// Example:
// "hello" → Not Unique 

export const isUniqueString = (string) => {
    let isUnique = true;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            isUnique = false;
        }
    }
    return isUnique;
}

