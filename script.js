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

// Prompts the player for a choice 
function getHumanChoice() {
    let input = prompt('Enter your move: Rock | Paper | Scissors').toLowerCase();

    // validates the input.
    if (input == 'rock' ||
        input == 'paper' ||
        input == 'scissors'
     ) {
         input;
     } else {
        alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
        getHumanChoice();
     }
}

