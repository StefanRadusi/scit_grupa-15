class Game {
  constructor() {
    this.words = ["apple", "car", "house", "university", "sky"];
    this.lives = 5;
    this.chooseRandomWord();
    this.renderTitle();
    this.renderLetters();
    this.renderUserInput();
    this.resetTheGames();
  }

  chooseRandomWord() {
    this.currentWord = this.words[
      Math.floor(Math.random() * this.words.length)
    ];
  }

  renderTitle() {
    const title = document.createElement("h2");
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
     if (this.lives === 0)  {
       return true;
     }
     return false;
   }

  showLoosingState() {
    // similar with "showWiningState"
    this.livesSpan.innerText = " YOU LOSE";
    this.input.disabled = true;
  }

  showWiningState() {
    this.livesSpan.innerText = " YOU WON";
    this.input.disabled = true;
  }

  checkIfWin() {
    // true or false
    // this.displayLetters.letters (is an array)
    // for trough this.displayLetters.letters , check if htmlRef.innerText === "_" then false
    for (const eachLetter of this.displayLetters.letters) {
      if (eachLetter.htmlRef.innerText === "_") {
        return false;
      }
    }
    return true;
  }

  cleanLetters() {
    this.displayLetters.lettersContainer.remove();
  }  

  resetTheGames() {
    this.resetButton = document.createElement("button");
    this.resetButton.innerText ="Reset";
    this.resetButton.classList.add("resetButton");
    document.body.appendChild(this.resetButton);

    this.resetButton.addEventListener("click", this.resetTheGame.bind(this));
  }

  // this must be used in reset button
  resetTheGame() {
    this.input.disabled = false;
    this.chooseRandomWord();
    this.lives = 5;
    this.updateLives();
    this.cleanLetters();
    this.displayLetters();
    this.resetLetters();
  }  
  resetLetters() {
    this.displayLetters.word = this.currentWord;
    this.displayLetters.createLettersHtml();
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
    const letters = this.word.split("");
    this.letters = [];
    for (const letter of letters) {
      const letterHtml = document.createElement("p");
      letterHtml.innerText = "_";
      this.letters.push({
        htmlRef: letterHtml,
        value: letter,
      });
      this.lettersContainer.appendChild(letterHtml);
    }

    document.body.appendChild(this.lettersContainer);
  }

  hasLetter(letter) {
    for (const objectLetter of this.letters) {
      if (objectLetter.value === letter) {
        return true;
      }
    }

    return false;
  }

  displayLetter(letter) {
    for (const objectLetter of this.letters) {
      if (objectLetter.value === letter) {
        objectLetter.htmlRef.innerText = letter;
      }
    }
  }
}


new Game();



