//event listeners to buttons
submitButton.addEventListener('click', showResults);

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