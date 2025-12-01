
// Author: Ehsanullah Akbari

// Date: 2025-11-30

// exercise 5 of week-4 Description: Move even numbers before odd numbers while maintaining order. 
// Example: 
// Input: [1, 2, 3, 4, 5, 6] 
// Output: [2, 4, 6, 1, 3, 5]
export const rearrangeArray = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i])
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            result.push(array[i])
        }
    }
    return result;

}
