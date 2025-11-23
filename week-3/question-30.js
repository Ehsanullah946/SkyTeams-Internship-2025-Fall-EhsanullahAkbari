// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 30 of week-3  find the missing number
// Example:
// Input:
//  [1,2,4,5]
// Output: 3

export const findMissingNumber = (array) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] + 1 !== array[i+1]){
            return array[i] + 1;
        }
    }
}
