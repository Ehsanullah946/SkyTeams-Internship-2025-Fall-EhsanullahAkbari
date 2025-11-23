
// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 8 of week-3 count the duplicate elemenet
// example

// input :  [33,4,4,5]; element=4
// output: 2

export const countDuplicate = (array, number) => {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === number) {
            count++;
        }
    }
    return count;
}
