const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
//figure out how to have multiple buttons
function startQuiz(){}
function showResults(){}

// display quiz on load
buildQuiz();

//event listeners to buttons
submitButton.addEventListener('click', showResults);

//displaying questions
const quizQuestions = [
    {
        question: Commonly used data types do not include
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers",
        },
        correctAnswer: "d"
    },
    {
        question: Arrays in JS can be used to store
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        correctAnswer: "d"
    },
    {
        question: A condition in if/else statement is enclosed with
        answers: {
            a: "quotes",
            b: "curly braces",
            c: "parentheses",
            d: "brackets",
        },
        correctAnswer: "b"
    },
    {
        question: String values must be enclosed with
        answers: {
            a: "commas", 
            b: "curly braces",
            c: "quotes",
            d: "parentheses",
        },
        correctAnswer: "c"
    },
    {
        question: A very useful tool during development and debugging for printing content to the debugger is
        answers: {
            a: "Javascript",
            b: "terminal/bash",
            c: "for loops",
            d: "console log",
        },
        correctAnswer: "d"
    },
];