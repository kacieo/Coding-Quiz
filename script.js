const startButton = document.getElementById('startButton');
const quizContainer = document.getElementById('quizContainer');
const questionTitle = document.getElementById('questionTitle');
const answerButtons = document.getElementById('answerBtn');
const resultsContainer = document.getElementById('results');

let currentQuestionIndex = 0;
let timer = 75;

//displaying questions
const quizQuestions = [
    {
        question: "Commonly used data types *do not* include..."
        choices: ["strings","booleans","alerts","numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in JS can be used to store..."
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "A condition in if/else statement is enclosed with..."
        choices: ["quotes", "curly braces", "parentheses", "brackets"],
        correctAnswer: "parentheses"
    },
    {
        question: "String values must be enclosed with..."
        choices: ["commas","curly braces","quotes","parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is..."
        choices: ["Javascript","terminal/bash","for loops","console log"]
        correctAnswer: "console log"
    },
];

//event listeners to button
startButton.addEventListener('click', startQuiz);

//start quiz
function startQuiz() {
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion();
    startTimer();
}

