
// Author: Ehsanullah Akbari
// Date: 2025-11-30
// exercise 4 of week-4  Description: Return whether a string contains only unique chars.
// Example:
// "hello" → Not Unique 

export const isUniqueString = (string) => {
    let map = {};
    for (let i = 0; i < string.length; i++) {
        if (!map[string[i]]) {
            map[string[i]] = 1;
        } else {
            map[string[i]]++;
        }
    }   
    for (let i = 0; i < string.length; i++) {
        if (map[string[i]]>1) {
            return false;
        }
    }
    return true;
}

console.log(isUniqueString("Ehsan"));