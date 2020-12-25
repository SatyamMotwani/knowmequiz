console.log("Welcome to HOW WELL DO YOU SATYAM QUIZ !! ");

var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;

var userName = readlineSync.question("May I have your name? ");

console.log(userName);

function play (question,answer) {
  var userAnswer = readlineSync.question(question);


  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right !!")

    score =  score + 1;
  } else {
    console.log("Wrong!!")
  }
  console.log("Current Score", score);
  console.log("---------------")

}


var questions =[{
  question : "Where does SATYAM live? ",
  answer : "Gwalior"
}, {
  question : "What does SATYAM like to eat? ",
  answer : "Dosa"
}, {
  question : "Which IPL team does SATYAM support? ",
  answer : "CSK"
}, {
  question : "Which TV serial SATYAM likes to watch? ",
  answer : "Taarak Mehta Ka Ooltah Chashmah"
}];

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.red.underline.bold("Final Score", score))

