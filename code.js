function getComputerChoice() {
    let num = Math.random();
    if (num >= 0 && num < 0.33)
        return "Rock";
    else if (num >= 0.33 && num < 0.66)
        return "Paper";
    else
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "Draw!";
    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            return "You lose this round! Paper beats Rock";
        }
        else {
            playerScore++;
            return "You win this round! Rock beats Scissors";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            computerScore++;
            return "You lose this round! Scissors beats Paper";
        }
        else {
            playerScore++;
            return "You win this round! Paper beats Rock";
        }
    }
    else {
        if (computerSelection === "Rock") {
            computerScore++;
            return "You lose this round! Rock beats Scissors";
        }
        else {
            playerScore++;
            return "You win this round! Scissors beats Paper";
        }
    }
}

function gameClick(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    let roundText = playRound(playerSelection, computerSelection);
    roundResult.textContent = roundText;
    counter += 1;
    display();
    if (playerScore === 5 || computerScore === 5) gameOver();
}

function display() {
    const choices = document.querySelector('.choices');
    if (counter !== 0) {
        choices.innerHTML = `You chose ${playerSelection} <br> The computer chose ${computerSelection}`;
    }
    else {
        choices.innerHTML = '';
        roundResult.textContent = '';
    }
    const playerDisplay = document.querySelector('#you');
    playerDisplay.textContent = playerScore;
    const computerDisplay = document.querySelector('#computer');
    computerDisplay.textContent = computerScore;
}

function gameResult() {
    let winner = '';
    if (computerScore > playerScore) winner = 'The computer wins the game!<br>Fortunately, you have been offered another attempt';
    if (playerScore > computerScore) winner = 'You win the game!<br>Want to try your luck once more?';
    finalScore.innerHTML = `${winner}`;
    content.appendChild(finalScore);
    computerScore = 0;
    playerScore = 0;
}

function restartGame() {
    const newGame = document.createElement('button');
    newGame.textContent = 'Play again';
    newGame.style.display = 'block';
    newGame.style.margin = '0px auto';
    content.appendChild(newGame);
    newGame.addEventListener('click', (e) => {
        content.removeChild(newGame);
        content.removeChild(finalScore);
        display();
        game();
    });
}

function gameOver() {
    playerSelection = '';
    computerSelection = '';
    counter = 0;
    const disableButton = document.querySelectorAll('button');
    disableButton.forEach(button => button.disabled = true);
    gameResult();
    restartGame();
}

function game() {
    const scoreDisplay = document.querySelector('.score-display');
    content.insertBefore(roundResult, scoreDisplay);
    const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach(button => button.disabled = false);
    playerChoice.forEach(button => button.addEventListener('click', gameClick));
}

let computerScore = 0;
let playerScore = 0;
let playerSelection = '';
let computerSelection = '';
let counter = 0;
const roundResult = document.createElement('div');
const content = document.querySelector('.content');
const finalScore = document.createElement('div');
game();