// Author:Ehsanullah
//  Data: 2025-12-04

// 16. Matrix Multiplication
// Description: Multiply matrix A × B manually.
// Example:
// [[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]]


export const matrixMultiplication = (array1, array2) => {
     
    let result = [];

    for (let i = 0; i < array1.length; i++) {
        result[i] = [];
        for (let j = 0; j < array2[0].length; j++) {
            result[i][j] = 0;
            for (let k = 0; k < array1[0].length; k++) {
                result[i][j] += array1[i][k] * array2[k][j];
            }
        }
    }
    return result
 }

