// Author: Ehsanullah Akbari
// Date: 2025-10-11
// example 3 of week-1 find max number from array

// example
// input : [3,4,56,5] 
// output: 56

export const findMax = (array) => {
  let max = array[0]; 
  for (let i = 1; i < array.length; i++) { 
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
