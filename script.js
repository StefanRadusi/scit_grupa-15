console.log("functions and scope");

let choiceArray = ["paper", "rock", "scissors"];
let computerChoice = Math.floor(3 * Math.random());
console.log(computerChoice);
if(computerChoice === 0){
    computerChoice="rock";
} if(computerChoice === 1){
    computerChoice="paper";
} if(computerChoice === 2){
    computerChoice="scissors";
}

console.log(computerChoice);


let choiceArray1 = ["paper", "rock", "scissors"];
let userChoice = Math.floor(Math.random() * 3);
console.log(userChoice);
if(userChoice === 0){
    userChoice="rock";
} else if(userChoice === 1){
    userChoice="paper";
} else if(userChoice === 2){
    userChoice="scissors";
}

console.log(userChoice);
//***************** */


// if (computerChoice === userChoice) {
//     console.log("It's Draw");
// } else if (computerChoice === 0 && userChoice === 1){
//     console.log("User wins");
// } else if (computerChoice === 0 && userChoice === 2) {
//         console.log("Computer wins");
// } else if (computerChoice === 1 && userChoice === 0){
//     console.log("Computer wins");
// } else if (computerChoice === 1 && userChoice === 2){
//     console.log("User wins");
// }  else if (computerChoice === 2 && userChoice === 0){
//     console.log("User wins");
// } else if (computerChoice === 2 && userChoice === 1){
//     console.log("Computer wins");
// } 


if (computerChoice === userChoice) {
    console.log("It's Draw");
}
 if (computerChoice === "rock"){
     if (userChoice === "scissors") {
         console.log("Computer wins");
     } else {
         console.log("User Wins")
     }
 }
 if (computerChoice === "paper"){
    if (userChoice === "rock") {
        console.log("Computer wins");
    } else {
        console.log("User Wins")
    }
}
if (computerChoice === "scissors"){
    if (userChoice === "paper") {
        console.log("Computer wins");
    } else {
        console.log("User Wins")
    }
}

console.log("----------------------------------");
console.log("New ex");
console.log("----------------------------------");

let computerChoice1 = Math.random();
if (computerChoice1 <= 0.34) {
    computerChoice1 = "rock";
} else if (computerChoice1 <= 0.67) {
    computerChoice1 = "Paper";
} else {
    computerChoice1 = "scissors";
}

console.log(computerChoice1);

let userChoice1 = Math.random();
if (userChoice1 <= 0.34) {
    userChoice1 = "rock";
} else if (userChoice1 <= 0.67) {
    userChoice1 = "Paper";
} else {
    userChoice1 = "scissors";
}

console.log(userChoice1);

choice1 = userChoice1;
choice2 = computerChoice1;

function compare(choice1, choice2) {
    if (choice1 === choice2){
        return ("It's a tie");
    }
    if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return("Rock wins");
        } else {
            return("Paper wins");
    }
}
    if (choice1 === "paper"){
        if (choice2 === "rock"){
            return("Paper wins");
        } else {
        return("Scissors wins");
    }
}
    if (choice1 === "scissors"){
        if (choice2 === "rock"){
            return("Rock wins");
        } else {
        return("Scissors wins");
        }
    }
    if (choice1 === "scissors"){
        if (choice2 === "paper"){
            return("scissors wins");
        } else {
        return("Rock wins");
        }
    }
}

console.log(compare(choice1, choice2));