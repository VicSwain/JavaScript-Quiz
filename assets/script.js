// variable declariation for HTML elements
var startButton = document.getElementById("start-button");
var startScreen = document.getElementById("start-screen");
var quizScreen = document.getElementById("quiz-screen");
var resultScreen = document.getElementById("show-result");
var results = document.getElementById("result");
var scoreScreen = document.getElementById("score-screen");
var highScoreScreen = document.getElementById("high-score-container");
var questionList = document.getElementById("question");
var timer = document.getElementById("time");
var total = document.getElementById("total");
var userName = document.getElementById("user-name");
var submitName = document.querySelectorAll(".submit-name");
var nameLabel = document.getElementById("entername");
var submitButton = document.querySelector(".button");
var highScoreButton = document.getElementById("high-score-button");
var playAgainButton = document.getElementById("play-again-button");
// variable declariation for timer
var timerInterval = null;
var timeLeft = 60;
var index = 0;
var score = 0;

// variable declaration for answer list
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var testResults = document.getElementById("test-results");
var userNameInput = localStorage.getItem("username");
var displayScore = localStorage.getItem("userscore");
var finalResults = {};
var finalResultsJson = "";

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
      "Which of the following methods can be used to display data in some form using JavaScript?",
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
  
  if (index < questionBank.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  clearInterval(timerInterval);
  quizScreen.style.display = "none";
  resultScreen.classList.add("hide");
  document.querySelector(".form-div").classList.remove("hide");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var nameInput = userName.value;

    if (nameInput === "") {
      alert("Error", "name cannot be blank");
      return;
    }

    var newScore = {
      initials: nameInput,
      result: score,
    };
    saveLocalStorage(newScore);

  });
  highScoreButton.addEventListener("click", function (event) {
    event.preventDefault();
    showHighScoreScreen();
  });
}

  
  function showHighScoreScreen() {
    document.querySelector(".form-div").classList.add("hide");
    highScoreScreen.classList.remove("hide");
    playAgainButton.classList.remove("hide");
    playAgainButton.addEventListener("click", function (event) {
      event.preventDefault();
      
    });
    loadScores();    
    startQuiz();
}

function loadScores(){
  var savedScores = JSON.parse(localStorage.getItem("highscores"));
  if(savedScores.length === 0){
    return
  }
  //sort the array here 

  for (let i = 0; i < savedScores.length; i++) {
    const element = savedScores[i];

    // innerHTML allows you create elements, add class, and set text in an easy to read format with template literals
    highScoreScreen.innerHTML += `<div class="score-element">
    <h2> ${element.initials} scored ${element.result}</h2>
    </div>`
   
  //  this is the code to do the above line by line
    // var newScoreElement = document.createElement("div")
    // newScoreElement.classList.add("score-element")
    // var scoreTextElement = document.createElement("h2")
    // scoreTextElement.textContent = `${element.initials} scored ${element.result}`
    // newScoreElement.append(scoreTextElement)
    // highScoreScreen.append(newScoreElement)
    
  }
}

function saveLocalStorage(newScore) {
  var savedScores = JSON.parse(localStorage.getItem("highscores"));
  console.log(savedScores);
  // if(!savedScores) is checking is saved scores is falsy: https://www.freecodecamp.org/news/falsy-values-in-javascript/#:~:text=Description,)%2C%20and%20false%20of%20course.
  if (savedScores === null) {
    localStorage.setItem("highscores", JSON.stringify([newScore]));
    return;
  }
  savedScores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(savedScores));
}

