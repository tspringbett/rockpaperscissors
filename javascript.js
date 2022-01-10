
let round = 0;
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

// produces the computer selection

function computerPlay() {
    const weapons = ["rock", "paper", "scissors"]
    return weapons[Math.floor(Math.random() * weapons.length)];
};

// uses buttons to select player weapon

buttons.forEach(button => {
    button.addEventListener("click", function() {
            playRound(button.value);
    })
});
 

// The game

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    result = "";
 
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            result += ("Congratulations, you won the round " + playerSelection + " beats " + computerSelection + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)

            if (playerScore === 5) {
                result += "<br><br>Congratulations, you won! Reload the page to play again"
                endGame();
            }
        
        } else  if  (playerSelection === computerSelection) {
            result = ("It's a tie, you both selected " + playerSelection + "<br><br>Player Score: " + playerScore + "<br>Computer Score: " + computerScore)

        } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) { 
            computerScore++;
            result += ("Sorry, you lost the round " + playerSelection + " is beaten by " + computerSelection + " <br><br>Player Score: " + playerScore + " <br>Computer Score: " + computerScore)

            if (computerScore === 5) {
                result += "<br><br>You lost the game. Reload the page to try again"
                endGame();
            }
 
    }
    document.getElementById('result').innerHTML = result
    return
};

function endGame() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
};


 
