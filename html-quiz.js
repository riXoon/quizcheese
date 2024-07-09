const questions = [
    {
        question: "What does HTML stands for?",
        answer: [
            {text: "<span>A</span> How To Make Lumpia", correct: "false"},
            {text: "<span>D</span>  Home Tool Markup Language", correct: "false"},
            {text: "<span>C</span> Hyper Text Markup Language", correct: "true"},
            {text: "<span>D</span>Hyperlinks Markup Language", correct: "false"},
        ] 
    }, 

    {
        question: "Choose the correct HTML element for the largest heading",
        answer: [
            {text: "<span>A</span> <heading>", correct: "false"},
            {text: "<span>B/span> <h1>", correct: "true"},
            {text: "<span>C</span> <head>", correct: "false"},
            {text: "<span>D</span> <h6>", correct: "false"},
        ]
    },  

    {
        question: "What is the correct HTML element for inserting a line break? ",
        answer: [
            {text: "<span>A</span> <p>", correct: "false"},
            {text: "<span>B</span> <b>", correct: "false"},
            {text: "<span>C</span> <h1>", correct: "false"},
            {text: "<span>D</span> <br>", correct: "true"},
        ]
    },  

    {
        question: "What is the correct HTML for adding a background color? ",
        answer: [
            {text: '<span>A</span> <body bg = "yellow">', correct: "false"},
            {text: "<span>B</span> <background>yellow</background>", correct: "false"},
            {text: "<span>C</span> <bg color = 'yellow'>", correct: "false"},
            {text: '<span>D</span> <body style="background-color:yellow">', correct: "true"},
        ]
    }, 

    {
        question: "Choose the correct HTML element to define important text",
        answer: [
            {text: "<span>A</span> <strong>", correct: "true"},
            {text: "<span>B</span> <important>", correct: "false"},
            {text: "<span>C</span> <b>", correct: "false"},
            {text: "<span>D</span> <i>", correct: "false"},
        ]
    },  

    {
        question: "Choose the correct HTML element to define emphasized textt",
        answer: [
            {text: "<span>A</span> <strong>", correct: "true"},
            {text: "<span>B</span> <em>", correct: "false"},
            {text: "<span>C</span> <br>", correct: "false"},
            {text: "<span>D</span> <italic>", correct: "false"},
        ]
    },  

    {
        question: "Choose the correct HTML element to define emphasized text",
        answer: [
            {text: "<span>A</span> <table><tr><tt>", correct: "false"},
            {text: "<span>B</span> <table><head><footer>", correct: "false"},
            {text: "<span>C</span> <table><tr><td>", correct: "true"},
            {text: "<span>D</span> <thead><body><tr>", correct: "false"},
        ]
    },  

    {
        question: "How can you make a numbered list?",
        answer: [
            {text: "<span>A</span> <list>", correct: "false"},
            {text: "<span>B</span> <dl>", correct: "false"},
            {text: "<span>C</span> <ul>", correct: "false"},
            {text: "<span>D</span> <ol>", correct: "true"},
        ]
    },  

    {
        question: "How can you make a bulleted list?",
        answer: [
            {text: "<span>A</span> <list>", correct: "false"},
            {text: "<span>B</span> <dl>", correct: "false"},
            {text: "<span>C</span> <ul>", correct: "true"},
            {text: "<span>D </span> <ol>", correct: "false"},
        ]
    },  
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}   

function showQuestion(){
    resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

startQuiz();