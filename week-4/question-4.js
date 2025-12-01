// Author: Ehsanullah Akbari
// Date: 2025-11-30
// exercise 4 of week-4  Description: Return elements present in both arrays. 
// Example: 
// Input: [1, 2, 3, 4], [3, 4, 5, 6] 
// Output: [3, 4] 
export const intersectionArray = (array1, array2) => {
    let result = [];
      for (let index = 0; index < array1.length; index++) {
          if (array1.includes(array2[index])) {
              result.push(array2[index])
          } 
    }
    return result;
}

console.log(intersectionArray([1, 2, 3, 4], [3, 4, 5, 6]));