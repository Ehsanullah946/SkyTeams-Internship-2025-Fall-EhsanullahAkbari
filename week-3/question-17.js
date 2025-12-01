// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 17 of week-3 Pattern Printing – Right-angled Triangle
// example
// input :  4
// output:
// *
// **
// ***
// ****


export const pattern = (n) => {
    for (let i = 1; i <= n; i++){
        let str = "";
        for (let j = 1; j <= i; j++){
            str += "*";
        }
        console.log(str);
    }
}
pattern(4);
