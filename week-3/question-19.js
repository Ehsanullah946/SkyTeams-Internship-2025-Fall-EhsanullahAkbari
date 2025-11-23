// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 18 of week-3   Pattern Printing – Pyramid
// Example:
// Input:
// 5
// Output:
//      *
//     ***
//    *****
//   *******
//  *********

export const patterPiramid = (number) => {
        for (let i = 1; i <= number; i++){
        let str = "";
        for (let j = number; j >= i; j--){
             str+=" "
         }
         for (let j = 1; j <= i; j++){
            str += "*"+"*";
        }
          for (let j = number; j >= i; j--){
             str+=" "
         }
        console.log(str);
    }
}
patterPiramid(4);