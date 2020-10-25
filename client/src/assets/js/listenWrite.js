let randomWord = null;
export default function(words) {
  const engWord = document.querySelector('.hidden-eng-word');
  const rusWord = document.querySelector('.rus-word');
  const guessContaier = document.querySelector('.guess-container')
  const guessResult = document.querySelector('.guess-result')
  
  engWord.style.visibility = 'hidden';
  guessContaier.style.display = 'block';
  guessResult.style.display = 'none';

  const wordArr = words.map(word=> word.word);
  
  randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  
  function insertWords (){
    engWord.innerHTML = randomWord.eng;
    rusWord.innerHTML = randomWord.rus;
  }

  insertWords();
}

export const checkWords = () => {
  const engWord = document.querySelector('.hidden-eng-word');
  const guessWord = document.querySelector('.guess-word');
  const guessContaier = document.querySelector('.guess-container')
  const guessResult = document.querySelector('.guess-result')
  if(engWord.innerHTML.toLowerCase() === guessWord.value.toLowerCase()){
    engWord.style.visibility = 'visible';
    guessContaier.style.display = 'none';
    guessResult.style.display = 'block';
    speak();
  } else {
    guessContaier.style.display = 'none';
    guessResult.firstElementChild.innerHTML = "Wrong!"
    guessResult.style.display = 'block';
  }
}

export function speak () {
  const engWord = document.querySelector('.hidden-eng-word').innerHTML;
  // Init speechSynthesis
  const message = new SpeechSynthesisUtterance(engWord);
  message.lang = 'en-US';
  speechSynthesis.speak(message);
}