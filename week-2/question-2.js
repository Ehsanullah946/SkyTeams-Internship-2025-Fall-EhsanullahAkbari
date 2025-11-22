// Author: Ehsanullah Akbari
// Date: 2025-10-11
// exercise 2 of week-2 finding the smallest and largest number 
// example
// input : a=4 b=5 c=10
// output: a=10 b=4

export const smallLargeNumber = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if(b>a &&  b>c){
        console.log(b);
    } else {
        console.log(c);
    }
    if (a < b && a < c) {
        console.log(a);
    } else if(b<a &&  b<c){
        console.log(b);
    } else {
        console.log(c);
    }
}
