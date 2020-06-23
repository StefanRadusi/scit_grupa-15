console.log("functions and scope");
//Implement “play” function that is a “Rock, paper, scissors” game. Implementations notes: ­ Create an array with all the possibilities (rock, paper, scissors);
//Pick a random option for Computer ( use Math.random); ­ Pick a random option for User ( use Math.random);
//Apply game rules for both options (use if/else if structures) Calling “play()” function will display in console something like this: Computer choice: “Rock” User choice: “Paper” User wins.
 
let rock = "rock";
let scissors = "scissors";
let paper = "paper";
let randomArray = [rock, scissors, paper];
 
let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return -1;
    } else if (choice1 === rock) {
        if (choice2 === scissors) {
            return choice1;
        } else {
            return choice2;
        }
    } else if (choice1 === paper) {
        if (choice2 === rock) {
            return choice1;
        } else {
            return choice2;
        }
    } else if (choice1 === scissors) {
        if (choice2 === rock) {
            return choice1;
        } else {
            return choice2;
        }
    }
};
 
let play = function () {
    let computerChoice =
        randomArray[Math.floor(Math.random() * randomArray.length)];
    let userChoice = prompt("Do you choose rock, paper or scissors?");
    if (userChoice) {
        userChoice = userChoice.trim().toLowerCase();
        if (randomArray.indexOf(userChoice) === -1) {
            alert("Wrong input, try again.");
            play();
        } else {
            console.log("User choice: " + userChoice);
            console.log("Computer Choice: " + computerChoice);
            let result = compare(userChoice, computerChoice);
            if (result !== -1) {
                console.log(result + " wins.");
            } else {
                console.log("its a tie.");
            }
            play();
        }
    }
};
play();