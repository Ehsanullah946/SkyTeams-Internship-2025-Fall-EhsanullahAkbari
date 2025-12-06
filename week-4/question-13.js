// Author: Ehsanullah Akbari
// Date: 2025-11-30
// 13. String Pattern Matching ("abba") 
// Description: Check if sentence follows the pattern. 
// Example: "dog cat cat dog" → True 

export const patternMatching = (str) => {
    let split = [];
    let word = '';  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            split.push(word);   
            word = '';
        }
        else {
            word += str[i];
        }
    }
    split.push(word); 
 
    let start = 0;
    let end = split.length - 1;

    while (start <= end) {
        if (split[start] !== split[end]) return false;
        start += 1
        end -= 1
    }
    return true;
}

