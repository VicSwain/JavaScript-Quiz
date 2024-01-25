// variable declariation for HTML Ids
var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var resultScreen = document.getElementById("show-result");
var scoreScreen = document.getElementById("score-screen");
var highScoreScreen = document.getElementById("high-score-screen");
var questionList = document.getElementById("question");

// variable declaration for answer list
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
// index for iteration
var index = 0;
// time clock for countdown
var timeLeft = 60;
// object for bank of questions
var questionBank = [
  {
    question: "Who invented JavaScript?",
    correctAnswer: "Brendan Eich",
    choices: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Bruce Banner",
    ],
  },
  {
    question: "What type of language is JavaScript?",
    correctAnswer: "Object-Oriented",
    choices: [
      "Object-Based",
      "Object-Oriented",
      "Procedural",
      "None of the above",
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using JavaScript:",
    correctAnswer: "Both A and B",
    choices: [
      "getElementbyId()",
      "getElementsbyClassName()",
      "Both A and B",
      "None of the above",
    ],
  },
  {
    question:
      "Which of the following methods can be used to display data in some for using JavaScript?",
    correctAnswer: "All of the above",
    choices: [
      "document.write()",
      "console.log()",
      "window.alert()",
      "All of the above",
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    correctAnswer: "const",
    choices: ["const", "var", "let", "constant"],
  },
];

startButton.addEventListener("click", startQuiz);
window.addEventListener("click", function (event) {
if (event.target.id.startsWith("answer")) {
  console.log(event.target.id);

}




})

function startQuiz() {
  console.log("Quiz should start");
  // hide your start page
  startScreen.style.display = "none";
  quizScreen.classList.remove("hide");

  //show your quiz page
  // startTimer();
  showQuestion();
}

function startTimer() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    console.log(timerInterval);

  })

  console.log("timer goes here");
}

function showQuestion() {
  var currentQuestion = questionBank[index];
  answerA.textContent = currentQuestion.choices[0];
  answerB.textContent = currentQuestion.choices[1];
  answerC.textContent = currentQuestion.choices[2];
  answerD.textContent = currentQuestion.choices[3];
 questionList.textContent = currentQuestion.question[index];
 console.log(questionList.textContent);


  

  // replace the current question
  // replace the possible answers
  // create an h2 in the quiz screen
  
  
  
  // create button
  //append it
  console.log(currentQuestion);
  
}

function checkIfCorrectOrNot(event) {
  // is it correct?
  var currentQuestion = questionBank[index];
  var correctAnswer = currentQuestion.correctAnswer;
  var selectedButton = event.target;
  console.log(selectedButton);
// considering increment of the question index by one and call show question
  // check if right or wrong
  //if wrong, timeLeft = timeLeft - 10

  //do I have any questions left
  //if I do, index ++
  // showQuestion(0)
  //else { endQuiz()}
}
