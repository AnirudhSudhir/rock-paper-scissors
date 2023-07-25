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
    if (playerSelection.equalsIgnoreCase(computerSelection))
        return "Draw!";
    else if (playerSelection.equalsIgnoreCase("Rock")) {
        if (computerSelection.equalsIgnoreCase("Paper"))
            return "You Lose! Paper beats Rock";
        else
            return "You Win! Rock beats Scissor";
    }
    else if (playerSelection.equalsIgnoreCase("Paper")) {
        if (computerSelection.equalsIgnoreCase("Scissor"))
            return "You Lose! Scissor beats Paper";
        else
            return "You Win! Paper beats Rock";
    }
    else {
        if (computerSelection.equalsIgnoreCase("Rock"))
            return "You Lose! Rock beats Scissor";
        else
            return "You Win! Scissor beats Paper";
    }
}