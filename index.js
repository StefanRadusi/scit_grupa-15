class Game {
  constructor() {
    this.words = ["apple", "car", "house", "university", "sky"];
    this.lives = 5;
    this.chooseRandomWord();
    this.renderTitle();
    this.renderLetters();
    this.renderUserInput();
    this.renderResetButton();
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

  renderResetButton() {
    this.resetBtn = document.createElement("button");
    this.resetBtn.innerText = "Reset";
    this.resetBtn.classList.add("resetBtn");
    document.body.appendChild(this.resetBtn);

    this.resetBtn.addEventListener("click", this.resetTheGame.bind(this));
  }

  checkIfLoose() {
    if (this.lives === 0) return true;

    return false;
  }

  showLoosingState() {
    this.livesSpan.innerText = ":You lose";
    this.input.disabled = true;
  }

  showWiningState() {
    this.livesSpan.innerText = ":You won";
    this.input.disabled = true;
  }

  checkIfWin() {
    let k = 0;
    for (let i = 0; i < this.displayLetters.letters.length; i++)
      if (this.displayLetters.letters[i].htmlRef.innerText === "_")
        return false;
      else {
        k++;
      }

    if (k === this.currentWord.length) return true;
  }

  cleanLetters() {
    this.displayLetters.lettersContainer.remove();
  }

  // this must be used in reset button
  resetTheGame() {
    this.lives = 5;
    this.input.disabled = false;
    this.input.remove();
    this.resetBtn.remove();
    this.updateLives();
    this.cleanLetters();
    this.chooseRandomWord();
    this.renderLetters();
    this.renderUserInput();
    this.renderResetButton();
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
        value: letter
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
