export default function (word){
  // Init speech synth
  const message = new SpeechSynthesisUtterance(word);
  message.lang = 'en-Us';
  speechSynthesis.speak(message);
}