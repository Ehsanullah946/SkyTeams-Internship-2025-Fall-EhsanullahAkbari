
// Author: Ehsanullah Akbari
// Date: 2025-11-30
// 9. String Compression
// Description: Compress using counts of consecutive characters. 
// Example: 
// "aabcccccaa" → "a2b1c5a3"

export const compressString = (str) => {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count += 1;
        } else if (str[i] !== str[i + 1]) {
            result += str[i];
            result += count;
            count = 1;
        } else {
            result += str[i];   
            result += 1;
        }
    }
    return result;
}

console.log(compressString("aabcccccaa"))
