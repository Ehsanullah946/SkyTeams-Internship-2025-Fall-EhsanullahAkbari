

// Author: Ehsanullah Akbari

// Date: 2025-10-18

// exercise 24 of week-3  Generate Pascal’s Triangle
// example
// Input:
// 5
// Output:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1


export const pascalTriangle = (number) => {
    for (let line = 0; line < number; line++) {
        let C = 1;
        let row = '';   
        for (let i = 0; i <= line; i++) {
            row += C + ' ';   
            C = C * (line - i) / (i + 1);
        }   
        console.log(row.trim());
    }
}
pascalTriangle(4)
