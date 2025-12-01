// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 22 of week-3  Collatz Sequence (Hailstone Numbers)
// Example:
// Input:
// 6
// Output:
// 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)

export const collatzSequence = (number) => {
    let sequence = [];
    let steps = 0;
    sequence.push(number);      
    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
        sequence.push(number);
        steps++;
    }
    return sequence;             
}
