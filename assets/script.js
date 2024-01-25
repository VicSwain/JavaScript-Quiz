// variable declariation for HTML Ids
var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var resultScreen = document.getElementById("show-result");
var results = document.getElementById("result");
var scoreScreen = document.getElementById("score-screen");
var highScoreScreen = document.getElementById("high-score-screen");
var questionList = document.getElementById("question");
var timer = document.getElementById("time");
var timeLeft = 60;
var index = 0;
var score = 0;
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

startButton.addEventListener("click", startQuiz);
window.addEventListener("click", function (event) {
  if (event.target.id.startsWith("answer")) {
    console.log(event.target.id);
  }
});

function startQuiz() {
  startScreen.style.display = "none";
  quizScreen.classList.remove("hide");

  //show your quiz page
  // startTimer();
  startTimer();
  showQuestion();
  
}

function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds remaining for the quiz.";
    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
    console.log(timerInterval);
    console.log(timeLeft);
  }, 1000);

  console.log(timerInterval);
}

function showQuestion() {
  var currentQuestion = questionBank[index];
  answerA.textContent = currentQuestion.choices[0];
  answerB.textContent = currentQuestion.choices[1];
  answerC.textContent = currentQuestion.choices[2];
  answerD.textContent = currentQuestion.choices[3];
  questionList.textContent = currentQuestion.question;

  // replace the current question
  // replace the possible answers

  // create button
  //append it
}

function checkIfCorrectOrNot(event) {
  // is it correct?
  var result = '';
  var currentQuestion = questionBank[index];
  var correctAnswercheck = questionBank.correctAnswer[index];
  var selectedButton = event.target;
  if (selectedButton === correctAnswercheck) {
    resultScreen.classList.remove("hide");
    results.classList.remove("hide");
    results.textContent = "Correct!"
  } else {
    resultScreen.classList.remove("hide");
    results.classList.remove("hide");
    results.textContent = "Wrong!";
  }
  console.log(selectedButton);
  console.log(correctAnswercheck);

}



  console.log(correctAnswercheck);

  // if (questionBank[index] <= 5) {
  //   index++;
  //   correctAnswer =
  // }
  // considering increment of the question index by one and call show question
  // check if right or wrong

// considering increment of the question index by one and call show question
// check if right or wrong

  //if wrong, timeLeft = timeLeft - 10

  //do I have any questions left
  //if I do, index ++
  // showQuestion(0)
  //else { endQuiz()}