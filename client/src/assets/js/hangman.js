let selectedWord = null;
export default function (vWords, loading){
  const hangman = document.querySelector('#hangman');
  const wordEl = document.getElementById("word");
  const hangWord = document.querySelector('.hang-word');
  const wrongLettersEl = document.getElementById("wrong-letters");
  const playAgainBtn = document.getElementById("play-button");
  const popup = document.getElementById("popup-container");
  const notification = document.getElementById("notification-container");
  const finalMessage = document.getElementById("final-message");
  
  const figureParts = document.querySelectorAll(".figure-part");

  const words = vWords.map(word => word.word);
    
  selectedWord = words[Math.floor(Math.random() * words.length)];
  
  hangWord.innerHTML = selectedWord.rus;
  const correctLetters = [];
  const wrongLetters = [];

  // Show hidden word
  function displayWord() {
    wordEl.innerHTML = `
      ${selectedWord.eng
        .split("")
        .map(
          (letter) => `<span class="letter">${correctLetters.includes(letter) ? letter : ""}</span>`
        )
        .join("")}
    `;
    const innerWord = wordEl.innerText.replace(/\n/g, "");

    if (innerWord === selectedWord.eng) {
      finalMessage.innerText = "Correct!";
      popup.style.display = "flex";
    }
  }
  displayWord();

  // Update the wrong letters
  function updateWrongLetterEl() {
    // Display wrong letters
    wrongLettersEl.innerHTML = `
      ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
      ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
    `;
    // Display parts
    figureParts.forEach((part, index) => {
      const errors = wrongLetters.length;

      if (index < errors) {
        part.style.display = "block";
      } else {
        part.style.display = "none";
      }
    });
    // Check if lost
    if (wrongLetters.length === figureParts.length) {
      finalMessage.innerText = "Wrong!";
      popup.style.display = "flex";
    }
  }

  // Show notification
  function showNotification() {
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }

  // Keydown letter press
  window.addEventListener("keydown", e => checkLetter(e));

  function checkLetter(e){
    if(hangman.classList.contains('game-active')){
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;
        if (selectedWord.eng.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            correctLetters.push(letter);

            displayWord();
          } else {
            showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);

            updateWrongLetterEl();
          } else {
            showNotification();
          }
        }
      }
    }
  }

  // Restart game and  play again
  playAgainBtn.addEventListener("click", restartGame);

  function restartGame(){
    // Empty ararys
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    hangWord.innerHTML = selectedWord.rus;

    displayWord();

    updateWrongLetterEl();
    popup.style.display = "none";
  }
}
