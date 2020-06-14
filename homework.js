const possibilitiesArray = ["Rock", "Paper", "Scissors"];
let UserChoice;
let ComputerChoice;
function play() {
    return possibilitiesArray[Math.floor(Math.random() * (possibilitiesArray.length - 1 - 0 + 1))];
}
UserChoice = play();
ComputerChoice = play();
if (ComputerChoice === possibilitiesArray[0] && UserChoice === possibilitiesArray[1]) {
    console.log("Computer choice: “Rock” User choice: “Paper” User wins.");
} else if (ComputerChoice === possibilitiesArray[1] && UserChoice === possibilitiesArray[0]) {
    console.log("Computer choice: “Paper” User choice: “Rock” Computer wins.");
}
if (ComputerChoice === possibilitiesArray[0] && UserChoice === possibilitiesArray[2]) {
    console.log("Computer choice: “Rock” User choice: “Scissors” Computer wins.");
} else if (ComputerChoice === possibilitiesArray[0] && UserChoice === possibilitiesArray[0]) {
    console.log("Computer choice: “Rock” User choice: “Rock” Nobody wins, it's a draw.");
}
if (ComputerChoice === possibilitiesArray[1] && UserChoice === possibilitiesArray[2]) {
    console.log("Computer choice: “Paper” User choice: “Scissors” Nobody wins, it's a draw.");
} else if(ComputerChoice === possibilitiesArray[1] && UserChoice === possibilitiesArray[1]){
    console.log("Computer choice: “Paper” User choice: “Paper” Nobody wins, it's a draw.");
}
if (ComputerChoice === possibilitiesArray[2] && UserChoice === possibilitiesArray[0]) {
    console.log("Computer choice: “Scissors” User choice: “Rock” Computer wins.");
} else if (ComputerChoice === possibilitiesArray[2] && UserChoice === possibilitiesArray[2]) {
    console.log("Computer choice: “Scissors” User choice: “Scissors” Nobody wins, it's a draw.");
}
if (ComputerChoice === possibilitiesArray[2] && UserChoice === possibilitiesArray[1]) {
    console.log("Computer choice: “Scissors” User choice: “Paper” Computer wins.");
}