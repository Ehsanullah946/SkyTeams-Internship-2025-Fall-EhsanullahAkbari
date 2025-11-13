// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 function checks the validity of triangle
// example
// input :  4,5,6
// output: valid
export const triangleValidity = (a, b, c) => {
    if ((a + b) >= c && (a+c)>=b && (b+c)>=a ) {
        return "valid"
    } else {
       return "not valid";
    }
}
