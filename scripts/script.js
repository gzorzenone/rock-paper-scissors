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

function capitalizeString(str) {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeString(playerSelection);

    /*
        0 = round win
        1 = round loss
        2 = round tie
    */
    if(playerSelection === "Rock") {
        if(computerSelection === playerSelection) {
            return 2;
        } else if(computerSelection === "Paper") {
            return 1;
        } else {
            return 0;
        }
    } else if(playerSelection === "Paper") {
        if(computerSelection === playerSelection) {
            return 2;
        } else if(computerSelection === "Rock") {
            return 0;
        } else {
            return 1;
        }
    } else {
        if(computerSelection === playerSelection) {
            return 2;
        } else if(computerSelection === "Rock") {
            return 1;
        } else {
            return 0;
        }
    }
}

function game() {
    let roundWins = 0;
    let roundLosses = 0;
    let roundTies = 0;

    for(let round = 0; round < 5; round++) {
        let playerSelection = prompt("Enter Rock, Paper or Scissors:");
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);

        playerSelection = capitalizeString(playerSelection);

        switch(roundResult) {
            case 0:
                console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
                roundWins++;
                break;
            case 1:
                console.log("You lose! " + computerSelection + " beats " + playerSelection + "!");
                roundLosses++;
                break;
            default:
                console.log("It's a tie! Both picked " + playerSelection + "!");
                roundTies++;
        }
    }

    if(roundWins > roundLosses) {
        console.log("You win!\n\nWins: " + roundWins + "\nLosses: " + roundLosses + "\nTies: " + roundTies);
    } else if(roundWins < roundLosses) {
        console.log("You lose!\n\nWins: " + roundWins + "\nLosses: " + roundLosses + "\nTies: " + roundTies);
    } else {
        console.log("It's a tie!\n\nWins: " + roundWins + "\nLosses: " + roundLosses + "\nTies: " + roundTies);
    }
}

game();