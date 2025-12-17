// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 7 of week-3  check if an array contains a specific element
// example

// input :  [33,4,5,6]; element=4
// output: true
export const findSpecificNumber = (array, number) => {
    let isFound = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] === number ) {
            isFound = true;
            break;
        } 
    } 
    return isFound
}
