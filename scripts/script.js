function getComputerChoice() {
    //Generate a random integer between 0 and 2 and store it in computerChoice
    let computerChoice = Math.floor(Math.random() * 3);

    switch(computerChoice) {
        case 0:
            return computerChoice = "Rock";
        case 1:
            return computerChoice = "Paper";
        default:
            return computerChoice = "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    if(playerSelection === "Rock") {
        if(computerSelection === playerSelection) {
            return "It's a tie! Both picked " + playerSelection + "!";
        } else if(computerSelection === "Paper") {
            return "You lose! " + computerSelection + " beats " + playerSelection + "!";
        } else {
            return "You win! " + playerSelection + " beats " + computerSelection + "!";
        }
    } else if(playerSelection === "Paper") {
        if(computerSelection === playerSelection) {
            return "It's a tie! Both picked " + playerSelection + "!";
        } else if(computerSelection === "Rock") {
            return "You win! " + playerSelection + " beats " + computerSelection + "!";
        } else {
            return "You lose! " + computerSelection + " beats " + playerSelection + "!";
        }
    } else {
        if(computerSelection === playerSelection) {
            return "It's a tie! Both picked " + playerSelection + "!";
        } else if(computerSelection === "Rock") {
            return "You lose! " + computerSelection + " beats " + playerSelection + "!";
        } else {
            return "You win! " + playerSelection + " beats " + computerSelection + "!";
        }
    }
}