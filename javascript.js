let round = 0;
let computerScore = 0;
let playerScore = 0;
let tie = 0;




// function used to select the weapon the computer will use
function computerPlay() {
    const weapons = ["rock", "paper", "scissors"]
     return weapons[Math.floor(Math.random() * weapons.length)];
}

const playerSelection = prompt("Pick your weapon. Rock, Paper or Scissors").toLowerCase();
const computerSelection = computerPlay();


    function playRound(playerSelection, computerSelection) {
        const score = {playerScore : 0, computerScore : 0};
        //paper round
        if (playerSelection === "paper" && computerSelection === "paper") {
            tie++;
            alert("its a tie");
        }  else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore++;
            alert("You Win! Paper beats Rock!");
        }  else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            alert("You lose! Sciccors beats paper!");
        } 
        //rock round
        else if (playerSelection === "rock" && computerSelection === "rock") {
            tie++;    
            alert("its a tie");
        }  else if (playerSelection === "rock" && computerSelection === "paper")  { 
            computerScore++;
            alert("You Lose! Paper beats Rock!");
        }  else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore++;
            alert("You Win! Rock beats scissors!");
        }
        //scissors round
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            tie++;
            alert("its a tie");
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            alert("You Lose! Rock beats Scissors!");
        }   else if (playerSelection === "Sciccors" && computerSelection === "paper") {
            playerScore++;
            alert("You Win! Scissors beat paper!");
    } 
}

function result(){
    if  ((tie > playerScore) && (tie > computerScore)){
        console.log("Its a tie! Nobody wins.")
    } 
    else if (playerScore > computerScore){
        console.log("You win! Never though this would happend...")
    } 
    else {
        console.log("HAHAHA, You loser!!")
    }
}

for (let round = 0; round < 4; round++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = computerPlay();
  
    playRound(playerSelection, computerSelection)

}
   
result();