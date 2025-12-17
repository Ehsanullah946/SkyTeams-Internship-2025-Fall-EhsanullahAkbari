// author: Ehsanullah;
// Data : 2025-12-05

// 24. K-th Largest Element  
// Given an array of numbers and a value k, find the number that would appear in the k-th 
// position if the array were sorted in descending order. 

export const kLargestElement = (array, k) => {
    let temp;
    let i = array.length;
    while (i>0) {
       for (let j = 0; j < array.length; j++) {
           if (array[j] < array[j+1]) {
               temp = array[j+1];
               array[j+1] = array[j];
               array[j] = temp;
       }    
        }
        i--;
        
    }
    return array[k-1];
}

