console.log("functions and scope");
console.log("functions and scope");

let array = ["Rock", "Paper", "Scissors"];
const ComputerChoice = array[Math.floor(array.length * Math.random())];
const UserChoice = array[Math.floor(array.length * Math.random())];
console.log(ComputerChoice);
console.log(UserChoice);

function play() {
  if (ComputerChoice === UserChoice) {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. Draw`);
  } else if (ComputerChoice === "Rock" && UserChoice === "Scissors") {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. Computer wins`);
  } else if (ComputerChoice === "Rock" && UserChoice === "Paper") {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. User wins`);
  } else if (ComputerChoice === "Paper" && UserChoice === "Rock") {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. Computer wins`);
  } else if (ComputerChoice === "Paper" && UserChoice === "Scissors") {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. User wins`);
  } else if (ComputerChoice === "Scissors" && UserChoice === "Rock") {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. User wins` );
  } else if (ComputerChoice === "Scissors" && UserChoice === "Paper") {
    console.log(`Computer choice is ${ComputerChoice} ,  User choice is ${UserChoice}. Computer wins`);
  }
}
play();
