// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 6 of week-3 find the min number in array
// example

// input :  [33,4,5,6];
// output: 4

export const minNumber = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}