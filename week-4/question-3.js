
// Author: Ehsanullah Akbari
// Date: 2025-11-30
// exercise 3 of week-4  Rotate elements of an array K times to the right.
// Input: [1, 2, 3, 4, 5], K = 2 
// Output: [4, 5, 1, 2, 3] 

export const rotateArray = (array,k) => {
    let result = [];
    for (let i = array.length - k; i < array.length; i++){
            result.push(array[i]);
    }

    for (let i = 0; i < array.length-k; i++){
            result.push(array[i]);
    }  
    return result;
}
