// Initialize the game variables
let humanScore = 0;
let computerScore = 0;
let roundsCount = 0;
const MAX_ROUNDS = 3;


// Randomly selects and returns the computer's choice.
function getComputerChoice() {
    const options = ['rock', 'scissors', 'paper'];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}