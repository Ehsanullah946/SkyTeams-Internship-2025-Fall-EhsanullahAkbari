// Author: Ehsanullah Akbari
// Date: 2025-11-30
// 12. Character Frequency Counter
// Description: Count occurrences of characters.
// Input: "banana" → {b:1, a:3, n:2}

export const characterFrequency = (string) => {
    const frequency = {};
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (frequency[char]) {
            frequency[char]++;
        }
        else {
            frequency[char] = 1;
        }   
    }
    return frequency;
}

