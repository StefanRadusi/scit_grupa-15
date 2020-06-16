console.log("functions and scope");

let userChoice = prompt('choose one: rock, paper or scissors?');
let choiceArray = ['paper', 'rock', 'scissors'];
let randomNumber = Math.floor(Math.random() * 3);
let computerChoice = choiceArray[randomNumber];

console.log(`Your choice: ${userChoice},  Computer's choice: ${computerChoice}.`);

if (userChoice === computerChoice){
    console.log("Tie!");
}else if (userChoice === 'paper' && computerChoice === 'rock'){
    console.log("You win!");
}else if (userChoice === 'rock' && computerChoice === 'scissors'){
    console.log("You win!");
}else if (userChoice === 'scissors' || computerChoice === 'paper'){
    console.log("You win!");
}else if (userChoice === 'scissors' && computerChoice === 'rock'){
    console.log("You lose!");
}else if (userChoice === 'rock' && computerChoice === 'paper'){
    console.log("You lose!");
}else if (userChoice === 'paper' && computerChoice === 'scissors'){
    console.log("You lose!");
}else{
console.log("Invalid input, try again!");
}
// homework done