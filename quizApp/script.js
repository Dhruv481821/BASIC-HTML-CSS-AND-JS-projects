const quizTest = [
    {
        question: "What does HTML stand for?",
        
        a: "Hyper Text Markup Language",
        b: "High Text Machine Language",
        c: "Hyper Transfer Markup Language",
        d: "Home Tool Markup Language",
        
        correct: "a"
    },
    
    {
        question: "Which language is used for styling web pages?",

        a: "HTML",
        b: "Java",
        c: "CSS",
        d: "Python",
        
        correct: "c"
    },
    
    {
        question: "Which company developed JavaScript?",
        
        a: "Microsoft",
        b: "Netscape",
        c: "Google",
        d: "Apple",
        
        correct: "b"
    },
    
    {
        question: "What is the output of 2 + 2?",
        
        a: "3",
        b: "5",
        c: "22",
        d: "4",
        
        correct: "d"
    },
    
    {
        question: "Which method is used to select an element by ID in JavaScript?",
        
        a: "querySelectorAll()",
        b: "getElementsByClassName()",
        c: "getElementById()",
        d: "getElementsByTagName()",
        
        correct: "c"
    }
];


const que = document.getElementById("que");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const questionNumber = document.getElementById("questionNumber");

const Btn = document.getElementById("nextBtn");

const answer = document.querySelectorAll('input[name = "answer"]');

let currentQuestion = 0;
let score = 0;


function loadQuestion() {

    deselectAnswers();
    const currentQuiz = quizTest[currentQuestion];

    que.innerText = currentQuiz.question;

    optionA.innerText = currentQuiz.a;
    optionB.innerText = currentQuiz.b;
    optionC.innerText = currentQuiz.c;
    optionD.innerText = currentQuiz.d;

    questionNumber.innerText =
    `Question ${currentQuestion + 1} / ${quizTest.length}`;

}

loadQuestion();


Btn.addEventListener("click", () => {

    const selectAnswer = getSelected();

    if(!selectAnswer) {
        alert("please select an answer!");
        return;
    }
    
    if(selectAnswer === quizTest[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if(currentQuestion < quizTest.length) {
        loadQuestion();
    } else {
        document.querySelector(".que_ans").innerHTML = `
        <h2>Your Score: ${score}/${quizTest.length}</h2>
        <button onclick="location.reload()">Play Again</button>
        `;
    }
});


function getSelected () {

    let selectedAnswer;

    answer.forEach((item) => {
        if(item.checked) {
            selectedAnswer = item.id;
        }
    });   

    return selectedAnswer;

};


function deselectAnswers() {
    answer.forEach((item) => {
        item.checked = false;
    });
}