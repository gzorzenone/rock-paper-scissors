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
    /*
        0 = win
        1 = loss
        2 = tie
    */
    if(playerSelection === "Rock") {
        if(computerSelection === playerSelection) {
            keepScore(2);
        } else if(computerSelection === "Paper") {
            keepScore(1);
        } else {
            keepScore(0);
        }
    } else if(playerSelection === "Paper") {
        if(computerSelection === playerSelection) {
            keepScore(2);
        } else if(computerSelection === "Rock") {
            keepScore(0);
        } else {
            keepScore(1);
        }
    } else {
        if(computerSelection === playerSelection) {
            keepScore(2);
        } else if(computerSelection === "Rock") {
            keepScore(1);
        } else {
            keepScore(0);
        }
    }
}

function resetScore() {
    roundWins = 0;
    roundLosses = 0;
    roundTies = 0;

    divWins.textContent = roundWins;
    divLosses.textContent = roundLosses;
    divTies.textContent = roundTies;
}

function keepScore(roundResult) {
    switch(roundResult) {
        case 0:
            roundWins++;
            divWins.textContent = roundWins;
            if(roundWins === 5) {
                alert("You win!");
                resetScore();
            }
            break;
        case 1:
            roundLosses++;
            divLosses.textContent = roundLosses;
            if(roundLosses === 5) {
                alert("You lose!");
                resetScore();
            }
            break;
        default:
            roundTies++;
            divTies.textContent = roundTies;
    }
}

const rpsButtons = document.querySelectorAll(".rps-button > button");
const divWins = document.querySelector("#wins");
const divLosses = document.querySelector("#losses");
const divTies = document.querySelector("#ties");
let roundWins;
let roundLosses;
let roundTies;

resetScore();

rpsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});