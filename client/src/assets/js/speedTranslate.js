// Init word
let randomWord;
export const speedTranslate = (wordsArr, reloader, setReloader) => {
  const word = document.getElementById("rusWord"),
  text = document.getElementById("text"),
  scoreEl = document.getElementById("score"),
  timeEl = document.getElementById("time"),
  endgameEl = document.getElementById("end-game-container"),
  settingsForm = document.getElementById("settings-form"),
  difficultySelect = document.getElementById("difficulty");
  
  // List of words for game
  const words = wordsArr.map(word => word.word);
  
  // Init score
  let score = 0;
 
  // Init time
  let time = 10;
  
  
  // Set difficulty to value in ls
  let difficulty =
    localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";

  // Set difficulty select value
  difficultySelect.value =
    localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "medium";
  // Focus on text on start
  text.focus();

  // Start counting down
  const timeInterval = setInterval(updateTime, 1000);

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
    endgameEl.innerHTML = `
      <h1>Time ran out</h1>
      <p>Your final score is ${score}</p>
      <button id='reload'>Reload</button>
    `;
    endgameEl.style.display = "flex";
  }
  
  // Reload Game
  endgameEl.addEventListener('click', reloadGame);
  // разобраться со временем!!!!!
  function reloadGame(e){
    if(e.target === document.getElementById('reload') || e.target === document.getElementById('difficulty')) {
      setReloader(!reloader);
      if(endgameEl.style.display === 'flex') {
        endgameEl.style.display = 'none';
      }
      score = 0;
      scoreEl.innerHTML = 0;      
    }
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
    difficulty = e.target.value;
    localStorage.setItem("difficulty", difficulty);
  });

}
  
  