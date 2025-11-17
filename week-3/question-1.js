// Author: Ehsanullah Akbari
// Date: 2025-10-15
// exercise 2 of week-3 count the valwols
// example

// input :  1234
// output: 4321

export const countValwels = (str) => {
  const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }  
    }
    return count;
}
