
// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 27 of week-3  find unique element 
// example
// input :  [1,2,3,4,4,5];
// output:  [1,2,3,4,5]

export const findUniqueElement = (array) => {
    let unique = [];
    for (let i = 0; i < array.length; i++){
        if (!unique.includes(array[i])) {
            unique.push(array[i]);
        }
    }
    return unique;
}

