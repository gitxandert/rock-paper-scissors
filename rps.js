function getComputerChoice() {
    let choice;
    let randNum = Math.floor(Math.random() *3 ) + 1;
    if(randNum === 1) {
        choice = "rock";
    } else if(randNum === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    console.log(choice);
    return choice;
}

function getPlayerChoice() {
    let pChoice = prompt("Rock paper or scissors?: ");
    return pChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Draw";
    }
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "You win!";
    }
    if(playerSelection == "rock" && computerSelection == "paper"){
        return "You lose.";
    }
    if(playerSelection == "scissors" && computerSelection == "paper"){
        return "You win!";
    }
    if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You lose.";
    }
    if(playerSelection == "paper" && computerSelection == "rock"){
        return "You win!";
    }
    if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You lose.";
    }
}

game();

function game(){
    let playerScore=0;
    let computerScore=0;
    for(i=0; i<5; i+=1){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        point = playRound(playerSelection,computerSelection);
        console.log(point);
        if(point == "Draw"){
            console.log("Player Score: " + playerScore + " " + "Computer Score: " + computerScore);
        }
        if(point == "You win!"){
            playerScore=playerScore+1;
            console.log("Player Score: " + playerScore + " " + "Computer Score: " + computerScore);
        }
        if(point == "You lose."){
            computerScore=computerScore+1;
            console.log("Player Score: " + playerScore + " " + "Computer Score: " + computerScore);
        }
    }
    if(playerScore==computerScore){
        console.log("Nobody wins")
    }
    if(playerScore>computerScore){
        console.log("You're the grand champion!")
    }
    if(playerScore<computerScore){
        console.log("Not this time buddy.")
    }
}