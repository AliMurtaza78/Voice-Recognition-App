const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = [
  "I'm good you son of a lovely mother",
  "Fine,Now Go Away",
  "Like You care",
];
const weather = [
  "it's heck of a romantic weather",
  "Go outside and see for yourself i am not your servant",
];

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = function () {
  console.log("Voice is Activated, Speak Up");
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;

  readOutLoud(transcript);
};

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = message;

  if(message.includes("how are you" )){
    const greetText = greetings[Math.floor(Math.random() * greetings.length)]
    speech.text = greetText
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
