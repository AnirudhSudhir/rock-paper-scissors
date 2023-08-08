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
            ++computerScore;
            return "You Lose! Paper beats Rock";
        }
        else {
            ++playerScore;
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            ++computerScore;
            return "You Lose! Scissors beats Paper";
        }
        else {
            ++playerScore;
            return "You Win! Paper beats Rock";
        }
    }
    else {
        if (computerSelection === "Rock") {
            ++computerScore;
            return "You Lose! Rock beats Scissors";
        }
        else {
            ++playerScore;
            return "You Win! Scissors beats Paper";
        }
    }
}

function display() {
        const choices = document.querySelector('.choices');
        choices.innerHTML = `You chose ${playerSelection} <br> The computer chose ${computerSelection}`;
    const playerDisplay = document.querySelector('#you');
    playerDisplay.textContent = playerScore;
    const computerDisplay = document.querySelector('#computer');
    computerDisplay.textContent = computerScore;
}

function game() {
    const playerChoice = document.querySelectorAll('button');
    playerChoice.forEach(button => button.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        display();
    }));
}

let computerScore = 0;
let playerScore = 0;
let playerSelection = '';
let computerSelection = '';
game();