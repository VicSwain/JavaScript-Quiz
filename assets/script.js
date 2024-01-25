// variable declariation for HTML Ids
var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var resultScreen = document.getElementById("show-result");
var scoreScreen = document.getElementById("score-screen");
var highScoreScreen = document.getElementById("high-score-screen");

// variable declaration for answer list
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
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
var index = 0;
var timeLeft = 60;
startButton.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("Quiz should start");
  // hide your start page
  startScreen.style.display = "none";
  quizScreen.classList.remove("hide");

  //show your quiz page
  startTimer();
  showQuestion();
}

function startTimer() {
  console.log("timer goes here");
}

function showQuestion() {
  var currentQuestion = questionBank[index];
  // empty the quiz screen
  
  // create an h2 in the quiz screen
  // set the text
  // append it
  //for loop thorugh the choices array
  // create button
  //append it
  //add event listener to the button
  // for (let i = 0; i < choices.length; i++) {
  //     const answerButton = document.createElement("button")
  //     answerButton. innerHTML = choices[i]
  //      answerButton.addEventListener('click', checkIfCorrectOrNot)

  // }
}

function checkIfCorrectOrNot(event) {
  // is it correct?
  var currentQuestion = questionBank[index];
  var correctAnswer = currentQuestion.correctAnswer;
  var selectedButton = event.target;
  console.log(selectedButton);

  // check if right or wrong
  //if wrong, timeLeft = timeLeft - 10

  //do I have any questions left
  //if I do, index ++
  // showQuestion(0)
  //else { endQuiz()}
}
