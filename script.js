console.log("functions and scope");

const rock = 'rock', paper = 'paper', scissors = 'scissors';

function play() {
    let computer = getPossibility();
    let player = getPossibility();
    const winner = whoWins(computer, player);

    console.log(`Computer choice: ${computer}, player choice: ${player}, ${winner} ${winner === "Draw" ? " " : "wins"}`);
}

function getPossibility() {
    const possibilities = [rock, paper, scissors];
    const randomIndex = Math.floor(Math.random() * 3);

    return possibilities[randomIndex];
}

function whoWins(computer, player) {
    if (computer === player) {
        return 'Draw';
    } else if (computer === rock) {
        if (player === paper) {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (computer === paper) {
        if (player === scissors) {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (computer === scissors) {
        if (player === paper) {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

play()
