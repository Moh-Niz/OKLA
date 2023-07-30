const quizData = JSON.parse(localStorage.getItem('quizData'));
let score = 0;
let userAnswer;
let correctAnswer;
let answeredCorrect;
let questionIndex;
let isCorrect = false;
let nextBtn = document.querySelector('.next-btn');
let questCount = document.querySelector('#question-counter');
let scoreCount = document.querySelector('#score');
let quiz = document.querySelector('#question');
let options = document.querySelectorAll(".option")
var TimeCount = document.querySelector('#Time');
var setTime = +localStorage.getItem('setTime');
if (setTime) countdown();

scoreCount.textContent = 0;



initialize();




//initalize quiz
function initialize() {
    score = 0;
    Time = 30;
    questionIndex = 0;
    userAnswer = false;
    loadQuestion();
    checkAnswer();
    showNextBtn();
    nextQuestion();
    countdown();
}


// get quiz question
function loadQuestion() {
    questCount.innerText = questionIndex + 1;
    quiz.innerText = quizData[questionIndex].question;
    options.forEach(function (option, i) {
        option.innerText = quizData[questionIndex].options[i];
        option.classList.remove('option-correct');
        option.classList.remove('option-wrong');
    })

    setAnswer();

    userAnswer = false;

    showNextBtn();

}

//show next button

function showNextBtn() {
    if (!userAnswer) {
        nextBtn.style.display = 'none';
    }
    else {
        nextBtn.style.display = "block";
    }
}

//check if selected answer is right or wrong

function checkAnswer() {
    options.forEach(function (checker) {
        checker.addEventListener('click', (e) => {
            if (!userAnswer) {
                chosenAnswer = e.target;
                if (chosenAnswer.textContent === quizData[questionIndex].correctAnswer) {
                    isCorrect = true;
                    chosenAnswer.classList.add('option-correct');
                    score += 10;
                    scoreCount.textContent = score;

                }

                else {
                    chosenAnswer.classList.add('option-wrong')
                    isCorrect = false;
                }
                if (!isCorrect) {
                }
            }
            userAnswer = true;
            showNextBtn();

        })
    })

}

//trigger next button
function showNextBtn() {
    if (!userAnswer) {
        nextBtn.style.display = 'none';
    }
    else {
        nextBtn.style.display = 'block';
    }
}

// set correct answer
function setAnswer() {
    options.forEach(function (option) {
        if (option.getAttribute('num') == quizData[questionIndex].correctAnswer) {
            correctAnswer = option;
        }
    })
}

// proceed to next question

function nextQuestion() {
    nextBtn.addEventListener('click', function () {
        if (questionIndex === 2) {
            nextBtn.textContent= "View Score";
        }

        if (questionIndex === 3){
            localStorage.setItem('finalScore', score);
            return window.location.href = "end.html";    
        }

        questionIndex++;
        loadQuestion();
        questCount.innerText = questionIndex + 1;


    })
}

//countdown prevent from restarting time after refresh


function countdown(){
    var seconds = setTime - Math.floor(Date.now()/1000);
    var timeleft = seconds % 60;

    TimeCount.innerHTML = timeleft;

    if (seconds <= 0){
        localStorage.removeItem('setTime'); //remove storage
        movetoendpage();
    } else{
       
       setTimeout(countdown,1000);
    }
}; 


function movetoendpage(){
    localStorage.setItem('finalScore', score);
    return window.location.href = "end.html";
};