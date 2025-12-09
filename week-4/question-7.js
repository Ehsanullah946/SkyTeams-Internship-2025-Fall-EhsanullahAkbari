// Author: Ehsanullah Akbari

// Date: 2025-11-30

// week 4 question  7. Rock, Paper, Scissors Game
// Description: Simulate a game using random computer choices.

export const gameWinner = (option) => {
    let options = ['rock', 'paper', 'scissors'];

    let computerOption = options[Math.floor(Math.random() * options.length)];

    if (option.toLowerCase() === computerOption) {
        return `It's a tie! Both chose ${option}`;
    }

    if ((option.toLowerCase() === 'rock' && computerOption === 'scissors') ||
        (option.toLowerCase() === 'paper' && computerOption === 'rock') ||
        (option.toLowerCase() === 'scissors' && computerOption === 'paper')     
    ) {
        return `You win! ${option} beats ${computerOption}`;
    }   
    return `Computer wins! ${computerOption} beats ${option}`;
}

console.log(gameWinner('rock'));
