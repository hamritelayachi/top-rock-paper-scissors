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
     ) {&
         return input;
     } else {
        alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
        getHumanChoice();
     }
}

function playRound() {
    
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const roundWinner = determineRoundWinner(humanChoice, computerChoice);


}

//  round winner determination logic
function determineRoundWinner(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return 'tie';
    } else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'human';
    } else {
        return 'computer';
    }
}

// Update the score based on the round winner
function updateScore(winner) {
    if(winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}
