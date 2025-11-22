
// Author: Ehsanullah Akbari

// Date: 2025-10-11

// exercise 2 of week-2 find the catagory of numbers
// example

// input :  4
// output:  Positive
export const findCategory = (number) => {
    if (number > 0) {
        return "Positive";
    } else if(number < 0){
        return "Negetive";
    } else {
        return "Zero"
    }
}
