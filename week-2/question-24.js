// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 function GCD of values
// example
// input :  12,18
// output: 6
export const GCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

