const startButton = document.getElementById('startButton');
const quizContainer = document.getElementById('quizContainer');
const questionTitle = document.getElementById('questionTitle');
const answerButtons = document.querySelectorAll('.answerBtn');
const resultsContainer = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;
let timer = 75;

//displaying questions
const quizQuestions = [
    {
        question: "Commonly used data types *do not* include...",
        choices: ["strings","booleans","alerts","numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "Arrays in JS can be used to store...",
        choices: ["numbers and strings","other arrays","booleans","all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "A condition in if/else statement is enclosed with...",
        choices: ["quotes", "curly braces", "parentheses", "brackets"],
        correctAnswer: "parentheses"
    },
    {
        question: "String values must be enclosed with...",
        choices: ["commas","curly braces","quotes","parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is...",
        choices: ["Javascript","terminal/bash","for loops","console log"],
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

//displaying questions
function displayQuestion(){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestion.choices[i];
        answerButtons[i].addEventListener('click', () => checkAnswer(currentQuestion.choices[i]));
    
    };
}
    //answer validation and display
    function checkAnswer(userAnswer) {
        console.log('Checking answer:', userAnswer);
        
        const currentQuestion = quizQuestions[currentQuestionIndex];
        console.log('Current Q', currentQuestionIndex);
        let correctAnswer = currentQuestion.correctAnswer;

        if (corrrectAnswer.includes(userAnswer)) {
            displayResult(true);
            score += 10;
        } else {
            displayResult(false);
            timer -= 10;
        }

        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length && timer > 0) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

function displayResult(isCorrect) {
    const resultsContainer = document.getElementById('results');

    if(isCorrect) {
        resultsContainer.textContent = "Correct! Great job!";
    } else {
        resultsContainer.textContent = "Sorry, that's not it.";

    }
}
//timer 
//timer counts down in console but does not yet display on page. add container for timer display.
function startTimer() {
    console.log('Timer started')
    const timerInterval = setInterval(() => {
        console.log('Inside setInterval');
        timer--;
        console.log('timer:', timer)
        if (timer <= 0 || currentQuestionIndex === quizQuestions.length) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}
//end of quiz, entering initials
function endQuiz() {
    resultsContainer.innerHTML = `
    <h2>You've completed the quiz!</h2>
    <p>Your score is ${score}</p>
    <label for="initials">Enter your initials:</label>
    <input type="text" id ="initials" />
    <button onclick="saveScore()">Submit</button>
    <div id="highScores"></div>
    `;
    resultsContainer.style.display = 'block';
}

//saving score
function saveScore() {
    console.log('Saving score');
    const initialsInput = document.getElementById('initials');
    const scoreInput = document.getElementById('score');
    const initials = initialsInput.value.trim();
    const score = parseInt(scoreInput.value);

    if (initials !== '' && !isNaN(score)) {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        const newScore = { initials, score };
        highScores.push(newScore);
        highScores.sort((a,b) => b.score - a.score);
        localStorage.setItem('highScores', JSON.stringify(highScores));

        displayHighScores();
    }
}
//display high scores
function displayHighScores() {
    const highScoresContainer = document.getElementById('highScores');
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    highScoresContainer.innerHTML = '<h2>High Scores</h2>';

    highScores.forEach((score, index) => {
        highScoresContainer.innerHTML += `<p>${index + 1}. ${score.initials} - ${score.score}</p>`
    });
}