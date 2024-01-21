var startButton = document.getElementById("start-button");
var questionBank = [
{
    prompt: "What is the name of my tutor",
    correctAnswer: "Alex",
    choices: ["Alex", "Tara", "Logan", "Mike"]
}

];
var index = 0
var timeLeft = 60
console.log(startButton);
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    console.log("Quiz should start");
    // hide your start page
    var startScreen = document.getElementById("start-screen")
    startScreen.style.display = "none"
    var quizScreen = document.getElementById("quiz-screen")
    quizScreen.classList.remove("hide")
    //show your quiz page
    startTimer()
    showQuestion()
}


function startTimer(){
    console.log("timer goes here")

}

function showQuestion(){
    var currentQuestion = questionBank[index]
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


function checkIfCorrectOrNot(event){
    // is it correct?
    var currentQuestion = questionBank[index]
    var correctAnswer = currentQuestion.correctAnswer
    var selectedButton = event.target
    console.log(selectedButton)

    // check if right or wrong
    //if wrong, timeLeft = timeLeft - 10

    //do I have any questions left
    //if I do, index ++
    // showQuestion(0)
    //else { endQuiz()}



}