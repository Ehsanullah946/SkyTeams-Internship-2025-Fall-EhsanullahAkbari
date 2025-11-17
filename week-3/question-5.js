// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 5 of week-3 find the max number in array
// example

// input :  [33,4,5,6];
// output: 33

export const maxNumber = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

