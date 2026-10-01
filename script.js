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
let input = prompt(
    `
Round: ${roundsCount + 1}/${MAX_ROUNDS}

Score:
You: ${humanScore} | Computer: ${computerScore}

Choose your move:
Rock | Paper | Scissors
`).toLowerCase();
    // validates the input.
    if (input === 'rock' ||
        input === 'paper' ||
        input === 'scissors'
     ) {
         return input;
     } else {
        alert('Invalid choice. Please enter Rock, Paper, or Scissors.');
        return getHumanChoice();
     }
}

function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    const winner = determineRoundWinner(humanChoice, computerChoice);
    updateScore(winner);
    alert(showRoundResult(winner));
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
        ++humanScore;
    } else if (winner === 'computer') {
        ++computerScore;
    }
}

// Display a message based on the round winner
function showRoundResult(winner) {
    if (winner === 'human') {
        return '🎉 Victory! You won the round!';
    } else if (winner === 'computer') {
        return '🤖 The computer wins this round!'
    } else {
        return '🤝 It’s a tie! Great minds think alike!';
    }
}

function determineGameWinner(human_score, computer_score) {
    if (human_score > computer_score) {
        return 'human';
    } else if (computer_score > human_score) {
        return 'computer'
    } else {
        return 'tie';
    }
}

function resetGame() {
    roundsCount = 0;
    computerScore = 0;
    humanScore = 0;
}

function playGame(max_rounds) {
    while (roundsCount < max_rounds) {
        playRound();
        roundsCount++;
    }

    const gameWinner = determineGameWinner(humanScore, computerScore);
    const result = showFinalResult(gameWinner);

    resetGame();

    alert(result);

}

function showFinalResult(gameWinner) {
    if (gameWinner === 'human') {
        return `🏆 You won the game!

Final Score:
You: ${humanScore} | Computer: ${computerScore}`;
    } else if (gameWinner === 'computer') {
        return `🤖 The computer won the game!

Final Score:
You: ${humanScore} | Computer: ${computerScore}`;
    } else {
        return `🤝 The game ended in a tie!

Final Score:
You: ${humanScore} | Computer: ${computerScore}`;
    }
}

playGame(MAX_ROUNDS);