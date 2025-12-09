// Author: Ehsanullah Akbari

// Date: 2025-11-30

// exercise 2 of week-4  Merge two sorted arrays into a single sorted array. 
// Example:
// Input: [10, 20, 4, 45, 99],[3,4,5,6,100]
// Output: [3,4,4,5,6,10, 20, 45, 99,100],

export const mergeArray = (array1,array2) => {
    let newArray = [];
    for (let i = 0; i < array2.length; i++){
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }   
    return newArray.sort((a,b)=> a-b);
}

console.log(mergeArray([1,2,4,5,10],[11,33,44,44])); 