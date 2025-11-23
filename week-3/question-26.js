// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 26 of week-3  convert decimal to binary
// Example:
// Input: 10
// Output:  1010


export const decimalToBinary=(decimalNumber) => {
    let binaryNumber = '';          
    while (decimalNumber > 0) {
        const remainder = decimalNumber % 2;
        binaryNumber = remainder.toString() + binaryNumber; 
        decimalNumber = Math.floor(decimalNumber / 2); 
    }               
    return binaryNumber;                           
}                        

