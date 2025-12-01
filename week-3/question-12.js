// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 12 of week-3 is palindrome
// example

// input :  32;
// output: false
export const checkPalindromNumber = (number) => {
    let rev = 0;
    let act = number;
    let isPalindrome = false;
    while (number > 0) {
        rev = rev * 10 + (number % 10);
        number = Math.floor(number / 10);  
    }
    if (rev === act) {
        return isPalindrome = true
    }
    else {
        return isPalindrome = false
    }
}
