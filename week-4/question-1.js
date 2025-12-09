// Author: Ehsanullah Akbari

// Date: 2025-11-30

// exercise 22 of week-3  Find the second largest number without sorting the array.
// Example:
// Input: [10, 20, 4, 45, 99]
// Output: 45


const findSecondLargeNo = (array) => {
     let max = -Infinity;
    let secondMax = -Infinity;
         for (let i = 0; i < array.length; i++){
             if (array[i] > max) {
                secondMax = max;
            max = array[i];
             } else if (array[i] < max && array[i] > secondMax) {
                 secondMax=array[i]
             }
             
    }
    return secondMax;
}


console.log(findSecondLargeNo([10, 7, 9, 5]));