// Author: Ehsanullah Akbari
// Date: 2025-10-11
// exercise 2 of week-2 changing Celsuis to fahrenheit and vice versa
// example
// input :  C=43 
// output:  F=109.4
// first way 
export const toCelsiu = (f) => {
    return (f - 32) * (5 / 9);
}

export const toFahrenheit = (c) => {
    return (c * 9/5) + 32;
}

// second way one function
export const temperatureConverter = (scale, value) => {
    if (scale === "F") {
         return (value - 32) * (5 / 9);
    } else if (scale === "C") {
         return (value * 9/5) + 32;
     }
}
