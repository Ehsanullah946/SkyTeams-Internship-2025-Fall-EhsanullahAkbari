// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 18 of week-3   Pattern Printing – Right-angled Triangle
// Example:
// Input:
// 4
// Output:
// *
// **
// ***
// ****



export const patternRight = (number) => {
        for (let i = 1; i <= number; i++){
        let str = "";
        for (let j = number; j >= i; j--){
             str+=" "
         }
         for (let j = 1; j <= i; j++){
            str += "*";
        }
        console.log(str);
    }
}
patternRight(4);