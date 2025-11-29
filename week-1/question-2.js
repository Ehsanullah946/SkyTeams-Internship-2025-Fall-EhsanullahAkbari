// Author: Ehsanullah Akbari
// Date: 2025-10-11
// example 2 reverse string

// example
// input : test 
// output: tset



export const reversString = (str) => {
    let revers = '';
    for (let i = str.length-1; i >= 0; i--){
        revers += str[i];
    }
    return revers;
}
