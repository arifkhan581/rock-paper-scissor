function getComputerChoice() {
    x = Math.floor(Math.random() * 3 ) +1

    if (x == 1) {
        return 'rock';
    }
    else if (x == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(){

    let computerChoice = getComputerChoice();
    let userChoice = prompt('rock, paper or scissors?').toLowerCase();
    
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        }
        else {
            return 'User wins!';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        }
        else {
            return 'User wins!';
        }
    }
    else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        }
        else {
            return 'User wins!';
        }
    }
    else {
        return 'Invalid input!';
    }
}

// let computerChoice = getComputerChoice();
// let userChoice = prompt('rock, paper or scissors?').toLowerCase();


let userScore = 0
let computerScore = 0

function playGame(){
    for(let i = 0; i < 5; i++){
       let round = (playRound());
       console.log(round);
       if (round.includes('User')) {
           userScore++;
       }
       else if (round.includes('Computer')) {
           computerScore++;
       }
    }

    if (userScore > computerScore) {
        console.log(`User wins the game! Final Score: ${userScore}`);
    }
    else if (computerScore > userScore) {
        console.log(`Computer wins the game! Final Score: ${computerScore}`);
    }
    else {
        console.log('It\'s a tie!');
    }

}

// console.log(`Users Score: ${userScore}`);
// console.log(`Computer Score: ${computerScore}`);

playGame();
