//const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("totalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");
const scoreText = document.getElementById("scoreText");

let message1 = "What Were You Doing When You Were In School? Anyways, Your Score is:";
let message2 = "Ooiinn! You See That You Have Not Done Well. Your Score is:";
let message3 = "Average, Why? Anyways, You Scored:";
let message4 = "A Bit Above Average. Your Score is:";
let message5 = "Nice One There. Your Score is:";
let message6 = "Soft Work. Spot On! Your Score is:";
let message7 = "Mad Oh! I Feel You! You Scored:";
let message8 = "Mad! Mhed! Meddington! You Scored:";

totalScore.innerText = mostRecentScore;

if (mostRecentScore <= 30) {
  scoreText.innerText = message1;
}else if (mostRecentScore <= 40) {
  scoreText.innerText = message2;
}else if (mostRecentScore <= 50) {
  scoreText.innerText = message3;
}else if (mostRecentScore <= 60) {
  scoreText.innerText = message4;
}else if (mostRecentScore <= 70) {
  scoreText.innerText = message5;
}else if (mostRecentScore <= 80) {
  scoreText.innerText = message6;
}else if (mostRecentScore <= 90) {
  scoreText.innerText = message7;
}else{
  scoreText.innerText = message8;
}