// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 16 of week-3 function fibo number 
// example
// input :  4
// output: 0,1,1,2,3
export const fibo = (number) => {
    let fibono = [];
    let a = 0;
    let b = 1;
    fibono.push(a);
    fibono.push(b);
    for (let i = 2; i <= number; i++){
        let c = a + b;
        fibono.push(c);
        a = b;
        b = c;
    }
    return fibono;
}
