// author: Ehsanullah;
// Data : 2025-12-04

// 21. Longest Palindromic Substring
// Input: "babad" → "bab" or "aba"

export const longestPalindrom = (str) => {
    let maxLength = 1;
    let start = 0;
    let len = str.length;
    let low, high;

    for (let i = 1; i < len; i++) {
        low = i - 1;
        high = i;
        while (low >= 0 && high < len && str[low] === str[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        } 
        low = i - 1;
        high = i + 1;
        
        while (low >= 0 && high < len && str[low] === str[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        }
    }
     return  str.substring(start, start + maxLength);

}

console.log( longestPalindrom("babadanagefea"))