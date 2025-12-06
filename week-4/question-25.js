// 25. Set Matrix Zeroes 
// If an element is zero, set its entire row and column to zero. 
// Follow-up: solve in constant extra space using the matrix itself as markers.


export const matrixZero = (array) => {
    let rows = array.length;
    let cols = array[0].length;
    let firstRow = false;
    let firstCol = false;   
    for (let i = 0; i < rows; i++) {
        if (array[i][0] === 0) {
            firstCol = true;
            break;
        }
    }
    for (let j = 0; j < cols; j++) {
        if (array[0][j] === 0) {
            firstRow = true;
            break;
        }
    }   
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (array[i][j] === 0) {
                array[i][0] = 0;
                array[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (array[i][0] === 0 || array[0][j] === 0) {
                array[i][j] = 0;
            }
        }
    }
    if (firstCol) {
        for (let i = 0; i < rows; i++) {
            array[i][0] = 0;
        }
    }
    if (firstRow) {
        for (let j = 0; j < cols; j++) {
            array[0][j] = 0;
        }
    }
   return array
    

}
