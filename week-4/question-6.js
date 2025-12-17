// Author: Ehsanullah Akbari

// Date: 2025-11-30

// exercise 6 of week-4 Description: Implement binary search in a sorted array. 
// Example: 
// Input: [1, 3, 5, 7, 9], Target = 7 
// Output: Found at index 3 

export const binarySearch = (array, target) => {
    let first = 0;
    let last = array.length;
    let mid = 0;
    while(first<=last) {
        mid = Math.floor((first + last) / 2)
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
          first = mid +1;
        } else {
            last =  mid-1;
        }
    }
    return -1;

}
console.log(binarySearch([3,4,5,6],6))
