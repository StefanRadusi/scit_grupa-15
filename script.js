console.log("Barnut Sergiu-Lucian-functions and scope");
const userChoice = prompt("rock, paper, scissors")
console.log("user: " + userChoice)
let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
}
else if (computerChoice <= 0.67 || computerChoice > 0.34) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);
let compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "Is a tie!"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins"
        }
        else {
            return "paper wins"
        }
    }
    else if (choice2 === "paper") {
        if (choice2 === "rock") {
            return "paper wins"
        }
        else {
            return "scissors wins";
        }
    }
}
const result = compare(userChoice, computerChoice)
alert(result);
console.log("Result:  " + result)
