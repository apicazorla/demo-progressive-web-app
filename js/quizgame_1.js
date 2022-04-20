//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01a.png",
    choiceA: "pentane",
    choiceB: "heptane",
    choiceC: "hexane",
    choiceD: "1,5-dimethylpentane",
    correctAnswer: "B"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01b.jpg",
    choiceA: "isopropane",
    choiceB: "methylpropane",
    choiceC: "isobutane",
    choiceD: "2-methylpropane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01c.jpg",
    choiceA: "2,2-dimethylpropane",
    choiceB: "tetramethylmethane",
    choiceC: "neopentane",
    choiceD: "dimethylpropane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01d.jpg",
    choiceA: "isopentane",
    choiceB: "methylbutane",
    choiceC: "2-methylbutane",
    choiceD: "2-methylpentane",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01e.jpg",
    choiceA: "2-methyl-4-ethylpentane",
    choiceB: "2-ethyl-4-methylpentane",
    choiceC: "2,4-dimethylhexane",
    choiceD: "3,5-dimethylhexane",
    correctAnswer: "C"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01f.jpg",
    choiceA: "3-ethyl-5-methylheptane",
    choiceB: "5-ethyl-3-methylheptane",
    choiceC: "5-ethyl-3-methylhexane",
    choiceD: "3-ethyl-methylhexane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01g.jpg",
    choiceA: "trimethylbutane",
    choiceB: "3,3,2-trimethylbutane",
    choiceC: "3,3,2-trimethylbutane",
    choiceD: "2,2,3,-trimethylbutane",
    correctAnswer: "D"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01h.jpg",
    choiceA: "4-(tert-butyl)heptane",
    choiceB: "4-(1,1-dimethylethyl)heptane",
    choiceC: "4-(2-methylpropan-2-yl)heptane",
    choiceD: "4-(2-methylpropanyl)heptane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01i.jpg",
    choiceA: "5-ethyl-3-methyl-4-propyloctane",
    choiceB: "3-methyl-4,5-dipropylheptane",
    choiceC: "4-(butan-2-yl)-5-ethyloctane",
    choiceD: "4-(sec-butyl)-5-ethyloctane",
    correctAnswer: "A"
}, {
    question: "What is the preferrer name of this compound?",
    imgSrc: "assets/birds/01j.jpg",
    choiceA: "4-isopropyl-3-methylheptane",
    choiceB: "4-(1-methylethyl)-3-methylheptane",
    choiceC: "3-methyl-4-(propan-2-yl)heptane",
    choiceD: "3-methyl-4-(1-methylethyl)heptane",
    correctAnswer: "C"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the nomenclature!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Inorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}