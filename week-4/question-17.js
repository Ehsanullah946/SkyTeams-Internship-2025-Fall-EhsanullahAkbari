
// Author: Ehsanullah Akbari
// Date: 2025-12-1
// exercise 17 of week-4  Description: Convert sentence into first-letter abbreviation. 
// Example: "I am learning JavaScript" → "I a l J" 

export const sentenceAbrevation = (string) => {  
    let result = string[0];    
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            result += string[i + 1];
      }
    }
    return result;     
}




