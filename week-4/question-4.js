// Author: Ehsanullah Akbari
// Date: 2025-11-30
// exercise 4 of week-4  Description: Return elements present in both arrays.
// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]


export const intersectionArray = (array1, array2) => {
    let result = [];
    let map = {};   
    for (let i = 0; i < array1.length; i++) {
        map[array1[i]] = true;
    }       
    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) {
            result.push(array2[j]);
            delete map[array2[j]];
        }
    }
    return result;
    
}

console.log(intersectionArray([1, 2, 3, 4], [3, 4, 4, 6]));