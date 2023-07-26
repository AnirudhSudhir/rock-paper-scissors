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
            return "You Lose! Paper beats Rock";
            ++computerScore;
        }
        else {
            return "You Win! Rock beats Scissor";
            ++playerScore;
        }
    }
    else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "scissor") {
            return "You Lose! Scissor beats Paper";
            ++computerScore;
        }
        else {
            return "You Win! Paper beats Rock";
            ++playerScore;
        }
    }
    else {
        if (computerSelection.toLowerCase() === "rock") {
            return "You Lose! Rock beats Scissor";
            ++computerScore;
        }
        else {
            return "You Win! Scissor beats Paper";
            ++playerScore;
        }
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Type either Rock or Paper or Scissor");
        let computerSelection = getComputerChoice();
        console.log(`The computer chose ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
        if (i !== 5)
            console.log(`The current score is
                         Computer: ${computerScore}
                         Player: ${playerScore}`);
    }
    console.log(`The final score is
                 Computer: ${computerScore}
                 Player: ${playerScore}`);
}

let computerScore = 0;
let playerScore = 0;
game();