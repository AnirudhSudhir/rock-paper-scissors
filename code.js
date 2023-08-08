function getComputerChoice() {
    let num = Math.random();
    if (num >= 0 && num < 0.33)
        return "Rock";
    else if (num >= 0.33 && num < 0.66)
        return "Paper";
    else
        return "Scissor";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
        return "Draw!";
    else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "paper") {
            ++computerScore;
            return "You Lose! Paper beats Rock";
        }
        else {
            ++playerScore;
            return "You Win! Rock beats Scissor";
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "scissor") {
            ++computerScore;
            return "You Lose! Scissor beats Paper";
        }
        else {
            ++playerScore;
            return "You Win! Paper beats Rock";
        }
    }
    else {
        if (computerSelection.toLowerCase() === "rock") {
            ++computerScore;
            return "You Lose! Rock beats Scissor";
        }
        else {
            ++playerScore;
            return "You Win! Scissor beats Paper";
        }
    }
}

function display() {
        console.log(`You chose ${playerSelection}`);
        console.log(`The computer chose ${computerSelection}`);
            console.log(`The current score is
Computer: ${computerScore}
Player: ${playerScore}`);
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