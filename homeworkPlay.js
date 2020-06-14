// Implement “play” function that is a “Rock, paper, scissors” game. Implementations notes: ­ Create an array with all the possibilities (rock, paper, scissors); ­
//  Pick a random option for Computer ( use Math.random); ­ Pick a random option for User ( use Math.random); ­ Apply game rules for both options (use if/else if structures) Calling “play()” 
//  function will display in console something like this: Computer choice: “Rock” User choice: “Paper” User wins.

function referee(){
    var training = {};
    function winLose(winner,loser){
        if (!training[winner]) training[winner] = {};
        training[winner][loser]=1;
    }
    function judge(play1,play2){
        if (play1 === play2){ return "It's a tie"; }
        return ( (training[play1][play2] === 1)? play1 : play2 ) +' wins!';
        
    }
    function validate(choice) {
        return choice in training;
    }
    function choices() {
        return Object.keys(training);
    }
    return {
        'winLose': winLose,
        'judge': judge,
        'validAction': validate,
        'getChoices': choices
    };
}

var ref = referee();
ref.winLose('rock','scissors');
ref.winLose('paper','rock');
ref.winLose('scissors','paper');


do {
    var userChoice = prompt("Do you choose rock, paper or scissors or should i choose? Type 'you choose' if you want me to choose.");
    if(userChoice === "you choose") {
        userChoice = ref.getChoices(); 
        userChoice = userChoice[Math.floor(Math.random()*userChoice.length)];
    }
} while(!ref.validAction(userChoice))
var choices = ref.getChoices(),
    computerChoice = choices[Math.floor(Math.random()*choices.length)];

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(ref.judge(userChoice, computerChoice));

let RefreshPage = document.getElementById("RefreshPage");
RefreshPage.addEventListener('click', function(){return location.reload();});