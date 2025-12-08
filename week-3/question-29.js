// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 29 of week-3  Check if Two Arrays Are Equal
// Example:
// Input:
// [1, 2, 3], [1, 2, 3]
// Output: Equal

export const checkEqualArray = (array1, array2) => {
    let isEqual = true;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
          isEqual = false;
        }
    }   
    return isEqual;
}
