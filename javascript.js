
// function used to select the weapon the computer will use
function computerPlay() {
    const weapons = ["rock", "paper", "scissors"]
     return weapons[Math.floor(Math.random() * weapons.length)];
}

const playerSelection = prompt("Pick your weapon. Rock, Paper or Scissors").toLowerCase();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    //paper round
    if (playerSelection === "paper" && computerSelection === "paper") {
        return "its a tie";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Sciccors beats paper!";
    } 
    //rock round
        else if (playerSelection === "rock" && computerSelection === "rock") {
        return "its a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors!";
    }
    //scissors round
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "its a tie";
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors!";
    }   else (playerSelection === "Sciccors" && computerSelection === "paper")
        return "You Win! Scissors beat paper!";
}


    console.log(playRound(playerSelection, computerSelection));
