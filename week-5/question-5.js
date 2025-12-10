// Ehsanullah Akbari
// Date: 2025-12-09
// 5. Backspace String Compare
// Problem:
// Given two strings s and t, return true if they are equal after interpreting # as a backspace.
// Example:
// Input: "ab#c", "ad#c"
// Output: true
// Both become "ac"


export const backSpaceStringCompare=(str,str2) => {
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            if (array1.length > 0) {
                array1.pop();
            }
        } else {
            array1.push(str[i]);
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === "#") {
            if (array2.length > 0) {
                array2.pop();
            }
        } else {
            array2.push(str2[i]);
        }
    }
    if (array1.join("") !== array2.join("")) {
        return false;
    }
    
    return true;
}
console.log(backSpaceStringCompare("ab#c", "ad#c"));
