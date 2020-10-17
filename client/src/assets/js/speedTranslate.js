// Init word
let randomWord = null;
// Init score
let score = null;
 
// Init time
let time = null;
let timeInterval = null;

// Set difficulty to value in ls
let difficulty = 
localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";

export const speedTranslate = (wordsArr) => {
  const word = document.getElementById("rusWord"),
  text = document.getElementById("text"),
  scoreEl = document.getElementById("score"),
  timeEl = document.getElementById("time"),
  endgameEl = document.getElementById("end-game-container"),
  settingsForm = document.getElementById("settings-form"),
  difficultySelect = document.getElementById("difficulty");
  
  
  // List of words for game
  const words = wordsArr.map(word => word.word);

  score = 0;
  scoreEl.innerHTML = score;
  time = 10;
  timeEl.innerHTML = time + 's';
  
  // Set difficulty select value
  difficultySelect.value =
  localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";
  
  // Focus on text on start
  text.focus();

  // Start counting down
  timeInterval = setInterval(updateTime, 1000);
  

  // Generate random word from array
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  // Add word to DOM
  function addWordToDom() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord.rus;
  }

  // Update Score
  function updateScore() {
    score++;
    scoreEl.innerHTML = score;
  }

  // Update time
  function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if (time === 0) {
      clearInterval(timeInterval);
      //Emd the game
      gameOver();
    }
  }

  // Game over, show end screen
  function gameOver() {
    endgameEl.style.display = "flex";
    document.getElementById('final-score').innerHTML = score;
  }
  
  addWordToDom();

  // Event listeners

  // Typing
  text.addEventListener("input", (e) => {
    const insertedText = e.target.value;

    if (insertedText === randomWord.eng) {
      addWordToDom();
      updateScore();

      // Clear input
      e.target.value = "";

      if (difficulty === "hard") {
        time += 2;
      } else if (difficulty === "medium") {
        time += 3;
      } else {
        time += 5;
      }

      updateTime();
    }
  });


  // Settings select
  settingsForm.addEventListener("change", (e) => {
    clearInterval(timeInterval);
    score = 0;
    time = 10;
    scoreEl.innerHTML = score;
    timeEl.innerHTML = time + "s";   
    difficulty = e.target.value;
    localStorage.setItem("difficulty", difficulty);
  });
}
  
  