let computerSelection = '';

function getComputerSelection() {
    let randNum = Math.floor(Math.random() *3 ) + 1;
    if(randNum === 1) {
        return "rock";
    } else if(randNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
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

const body=document.querySelector('body');
body.setAttribute('style', 'display:flex; flex-direction:column; gap: 16px; justify-content:flex-start; align-items:center; margin:16px;')

const parent = document.querySelector('p');
parent.setAttribute('style', 'display: flex; gap: 16px; justify-content: center;')

const rockBtn = document.createElement('button');
rockBtn.setAttribute('class', 'rock');
rockBtn.setAttribute('style', 'border-radius: 8px; width: 80px; height: 50px; font-size: 20px;');
rockBtn.textContent = 'rock';
parent.appendChild(rockBtn);

const paperBtn = document.createElement('button');
paperBtn.setAttribute('class', 'paper');
paperBtn.textContent = 'paper';
paperBtn.setAttribute('style', 'border-radius: 8px; width: 80px; height: 50px; font-size: 20px;');
parent.appendChild(paperBtn);

const scissBtn = document.createElement('button');
scissBtn.setAttribute('class', 'scissors');
scissBtn.textContent = 'scissors';
scissBtn.setAttribute('style', 'border-radius: 8px; width: 100px; height: 50px; font-size: 20px; text-align: center;');
parent.appendChild(scissBtn);

let playerSelection='';
let point='';

rockBtn.addEventListener('click', () => {
    playerSelection='rock';
    computerSelection=getComputerSelection();
    point=playRound(playerSelection, computerSelection);
    score(point);
});

paperBtn.addEventListener('click', () => {
    playerSelection='paper';
    computerSelection=getComputerSelection();
    point=playRound(playerSelection, computerSelection);
    score(point);
});

scissBtn.addEventListener('click', () => {
    playerSelection='scissors'; 
    computerSelection=getComputerSelection();
    point=playRound(playerSelection, computerSelection);
    score(point);
});

const scoreBoard = document.querySelector('div');
scoreBoard.setAttribute('style', 'display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; font-family: Arial; gap: 20px; width: 300px; height: 200px; border-radius: 8px; border: solid 4px black; padding: 24px; background-color: #709DA9;');

const scores = document.createElement('div');
scores.setAttribute('style', 'display: flex; justify-content: space-between;gap: 50px;');
scoreBoard.appendChild(scores);

let playerScore=0;
let computerScore=0;

const playerTally = document.createElement('div');
playerTally.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; gap: 10px;');

const playerScoreLabel = document.createElement('span');
playerScoreLabel.textContent = 'Player Score';
playerTally.appendChild(playerScoreLabel);

const playerScoreNumber = document.createElement('span');
playerScoreNumber.textContent = playerScore;
playerScoreNumber.setAttribute('style', 'font-size: 30px;');
playerTally.appendChild(playerScoreNumber);

scores.appendChild(playerTally);

const computerTally = document.createElement('div');
computerTally.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; gap: 10px;');

const computerScoreLabel = document.createElement('span');
computerScoreLabel.textContent = 'Computer Score';
computerTally.appendChild(computerScoreLabel);

const computerScoreNumber = document.createElement('span');
computerScoreNumber.textContent = computerScore;
computerScoreNumber.setAttribute('style', 'font-size: 30px;');
computerTally.appendChild(computerScoreNumber);

scores.appendChild(computerTally);

const scoreBoardMessages = document.createElement('span');
scoreBoardMessages.setAttribute('style', 'display: flex; flex-shrink: 1; text-align: center;');
scoreBoardMessages.textContent = 'Choose your weapon...';

scoreBoard.appendChild(scoreBoardMessages);

let i=0;

function score(point){
    if(point == "Draw"){
        scoreBoardMessages.textContent = 'Draw';
        i+=1;
    }
    if(point == "You win!"){
        playerScore=playerScore+1;
        playerScoreNumber.textContent = playerScore;
        scoreBoardMessages.textContent = 'You win!';
        console.log("Player Score: " + playerScore + " " + "Computer Score: " + computerScore);
        i+=1;
    }
    if(point == "You lose."){
        computerScore=computerScore+1;
        computerScoreNumber.textContent = computerScore;
        scoreBoardMessages.textContent = 'You lose.';
        console.log("Player Score: " + playerScore + " " + "Computer Score: " + computerScore);
        i+=1;
    }
    if(i===5){
        if(playerScore==computerScore){
            scoreBoardMessages.setAttribute('style', 'font-weight: bold;');
            scoreBoardMessages.textContent = 'Nobody wins';
            playAgain();
        }
        if(playerScore>computerScore){
            scoreBoardMessages.setAttribute('style', 'font-weight: bold;');
            scoreBoardMessages.textContent = "You're the grand champion!";
            playAgain();
        }
        if(playerScore<computerScore){
            scoreBoardMessages.setAttribute('style', 'size: 40; font-weight: bold;');
            scoreBoardMessages.textContent = 'Not this time buddy.';
            playAgain();
        }
    }

    function playAgain(){
        const playAgain = document.createElement('button');
        playAgain.textContent ='Play Again';
        playAgain.setAttribute('style', 'border-radius: 8px; width: 120px; height: 50px; font-size: 20px;');
        scoreBoard.appendChild(playAgain);
        playAgain.addEventListener('click', () => {
            i=0;
            playerScore=0;
            playerScoreNumber.textContent=playerScore;
            computerScore=0;
            computerScoreNumber.textContent=computerScore;
            scoreBoardMessages.setAttribute('style', 'font-weight: normal;');
            scoreBoardMessages.textContent = 'Choose your weapon...';
            scoreBoard.removeChild(playAgain);
        });
    }
}