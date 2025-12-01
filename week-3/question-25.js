// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 25 of week-3  guess the number
// Example:
// Input: 4
// Output: "too low" or "too high" or "Congratulations! You guessed the correct number."


export const GuessNumber = (number) => {
    const randomNumber = Math.random();
    const secretNumber = Math.floor(randomNumber * 100) + 1;
    if (number === secretNumber) {
        return "Congratulations! You guessed the correct number.";
    } else if(number < secretNumber) {
        return "too low";
    }else if(number > secretNumber){
        return "too high";
    }       
}
console.log(GuessNumber(40));
