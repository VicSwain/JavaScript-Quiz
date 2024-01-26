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
var total = document.getElementById("total");
var userName = document.getElementById("user-name");
var submitName = document.getElementById("submit-name")
var nameLabel = document.getElementById("entername");
var timerInterval = null; 
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
    checkIfCorrectOrNot(event);
  }
});

function startQuiz() {
  startScreen.style.display = "none";
  quizScreen.classList.remove("hide");
  startTimer();
  showQuestion();
}

function startTimer() {
    timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds remaining for the quiz.";
    if (timeLeft <= 0) {
      endGame();
      clearInterval(timerInterval);
    }
  }, 1000);
}

function showQuestion() {
  var currentQuestion = questionBank[index];
  answerA.textContent = currentQuestion.choices[0];
  answerB.textContent = currentQuestion.choices[1];
  answerC.textContent = currentQuestion.choices[2];
  answerD.textContent = currentQuestion.choices[3];
  questionList.textContent = currentQuestion.question;
}

function checkIfCorrectOrNot(event) {
  var correctAnswerCheck = questionBank[index].correctAnswer;
  var selectedButton = event.target.innerHTML;

  if (selectedButton == correctAnswerCheck) {
    resultScreen.classList.remove("hide");
    results.classList.remove("hide");
    results.textContent = "Correct!";
    score = score + 5;
    total.textContent = "Your current score is " + score;
  } else {
    resultScreen.classList.remove("hide");
    results.classList.remove("hide");
    results.textContent = "Wrong!";
    timeLeft = timeLeft - 5;
  }
  index++;
  showQuestion();
  if (index >= 4) {
    endGame();
  }
}

function endGame() {
  clearInterval(timerInterval);
  quizScreen.style.display = "none";
  highScoreScreen.classList.remove("hide");
  userName.classList.remove("hide")
  resultScreen.classList.add("hide");
  nameLabel.classList.remove("hide");
  console.log(userName);
  console.log(submitName);




}


