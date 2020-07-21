class Game {
  constructor() {
    this.words = ["apple", "car", "house", "university", "sky"];
    this.lives = 5;
    this.chooseRandomWord();
    this.renderTitle();
    this.renderLetters();
    this.renderUserInput();
    this.gameReset();
  }

  chooseRandomWord() {
    this.currentWord = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
  }

  renderTitle() {
      let title;
      title = document.createElement("h2");
      title.innerText = "Hangman Game";

      this.renderInitialLives(title);

      document.body.appendChild(title);
  }

  renderInitialLives(title) {
    this.livesSpan = document.createElement("span");
    this.livesSpan.innerText = ` - Lives: ${this.lives}`;
    title.appendChild(this.livesSpan);
  }

  updateLives() {
    this.livesSpan.innerText = ` - Lives: ${this.lives}`;
  }

  renderLetters() {
    this.displayLetters = new LettersDisplay(this.currentWord);
  }

  renderUserInput() {
    this.input = document.createElement("input");
    this.input.placeholder = "try a letter";
    document.body.appendChild(this.input);

    this.input.addEventListener("keyup", this.reactToUserInput.bind(this));
  }

  reactToUserInput(event) {
    if (this.input.value.length === 1) {
      if (event.key === "Enter") {
        const value = this.input.value;

        if (this.displayLetters.hasLetter(value)) {
          this.displayLetters.displayLetter(value);

          if (this.checkIfWin()) {
            this.showWiningState();
          }
        } else {
          this.lives--;
          this.updateLives();
          console.log(this.lives);
          if (this.checkIfLoose()) {
            this.showLoosingState();
          }
        }

        this.input.value = "";
      }
    } else if (this.input.value.length !== 0) {
      this.input.value = event.key;
    }
  }

  checkIfLoose() {
      return !!(this.lives === 0);
  }

  showLoosingState() {
    this.livesSpan.innerText = " - You lost";
    this.input.disabled = true;
  }

  showWiningState() {
    this.livesSpan.innerText = " - You won";
    this.input.disabled = true;
  }

  checkIfWin() {
    for (let letter of this.displayLetters.letters) {
      if (letter.htmlRef.innerText !== "_") {
          debugger;
      } else
          return false;
    }
    return true
  }

  cleanLetters() {
    this.displayLetters.lettersContainer.remove();
  }

  gameReset(){
    this.buttonReset = document.createElement('button');
    this.buttonReset.innerText = `Reset The Game`
    this.buttonReset.classList.add('button-r' + 'eset');
    this.buttonReset.addEventListener('c' + 'lick',this.resetTheGame.bind(this))
    document.body.appendChild(this.buttonReset)
  }

  // this must be used in reset button
  resetTheGame() {
    this.input.disabled = false;
    this.chooseRandomWord();
    this.lives = 5;
    this.updateLives();
    this.cleanLetters();
    this.renderLetters();
  }
}

class LettersDisplay {
  constructor(word) {
    this.word = word;
    this.initialDisplay();
  }

  initialDisplay() {
      this.lettersContainer = document.createElement("div");
      this.lettersContainer.classList.add("letters-container");
      let letters;
      letters = this.word.split("");
      this.letters = [];
      for (let letter of letters) {
        const letterHtml = document.createElement("p");
        letterHtml.innerText = "_";
        this.letters.push({
          htmlRef: letterHtml,
          value: letter,
        });
        this.lettersContainer.appendChild(letterHtml);
      }

      //get the second child of body and append to it the letters-container
      //the first child is the <script...>
      let FirstChildInBody;
      FirstChildInBody = document.body.children[1];
      FirstChildInBody.appendChild(this.lettersContainer);
  }

  hasLetter(letter) {
    for (let objectLetter of this.letters) {
      if (objectLetter.value === letter) {
        return true;
      } else {
          debugger;
      }
    }

    return false;
  }

  displayLetter(letter) {
    for (const objectLetter of this.letters) {
      if (objectLetter.value === letter) {
        objectLetter.htmlRef.innerText = letter;
      } else {
          debugger;
      }
    }
  }
}

new Game();