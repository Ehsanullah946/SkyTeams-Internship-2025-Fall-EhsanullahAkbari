// Author: Ehsanullah Akbari

// Date: 2025-10-12

// exercise 14 of week-2 determine if it’s a vowel, consonant, digit, or special symbol.
// example
// Input: a 
// Output: Vowel 
export const charecterType = (ch) => {
  const vowelRegex = /^[aeiouAEIOU]$/;
  const consonantRegex = /^[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z]$/;
  const digitRegex = /^[0-9]$/;
  const specialRegex = /^[^a-zA-Z0-9]$/;

    if (vowelRegex.test(ch)) {
    return "Vowel";
  } else if (consonantRegex.test(ch)) {
    return "Consonant";
  } else if (digitRegex.test(ch)) {
    return "Digit";
  } else if (specialRegex.test(ch)) {
    return "Special Symbol";
  } else {
    return "Invalid input";
  }

}
