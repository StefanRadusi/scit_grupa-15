let userChosen;
let computerChosen;
var result = results();
const displayResult = document.getElementById('results');
const computerChoice = document.getElementById('computer-choice');
const randomNumber = Math.round(Math.random() * (3));
const userChoice = document.getElementById('user-choice');
const possibleChoices = document.querySelectorAll('.choices');

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) =>{
    userChosen = e.target.id; 
    GeneratedComputerChoice();
    results();
    userChoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
}))

function GeneratedComputerChoice() {
    if (randomNumber === 1) {
        return computerChosen = "rock";
    } else if (randomNumber === 2) {
        return computerChosen = "paper";
    } else if (randomNumber === 3) {
        return computerChosen = "scissors";
    }
}

function results() {
    if(computerChosen === userChosen) {
        return result = 'Tie game'
    } else if (computerChosen === 'rock' && userChosen === 'paper') {
        return result = 'you lost'
    } else if (computerChosen === 'rock' && userChosen === 'scissors') {
        return result = 'you won'
    } else if (computerChosen === 'paper' && userChosen === 'rock') {
        return result = 'you lost'
    } else if (computerChosen === 'paper' && userChosen === 'scissors') {
        return result = 'you won'
    } else if (computerChosen === 'scissors' && userChosen === 'rock') {
        return result = 'you won'
    } else if (computerChosen === 'scissors' && userChosen === 'paper') {
        return result = 'you lost'
    }
}