
//Creating questions and answers in array
const questions = [
    {
        question: "What does HTML stand for?",
        answer: [
            { text: "<span>A</span> How To Make Lumpia", correct: false },
            { text: "<span>B</span> Home Tool Markup Language", correct: false },
            { text: "<span>C</span> Hyper Text Markup Language", correct: true },
            { text: "<span>D</span> Hyperlinks Markup Language", correct: false },
        ]
    },
    {
        question: "How many tags are in a regular HTML element?",
        answer: [
            { text: "<span>A</span> 2", correct: true },
            { text: "<span>B</span> 3", correct: false },
            { text: "<span>C</span> 5", correct: false },
            { text: "<span>D</span> 1", correct: false },
        ]
    },
    {
        question: "What is the difference between an opening tag and a closing tag?",
        answer: [
            { text: "<span>A</span> Opening tag has a / in front.", correct: false },
            { text: "<span>B</span> Closing tag has a / in front.", correct: true },
            { text: "<span>C</span> Closing tag has a // in front.", correct: false },
            { text: "<span>D</span> There is no difference between those two", correct: false },
        ]
    },
    {
        question: "< br  / > What type of tag is this?",
        answer: [
            { text: '<span>A</span> Break line', correct: false },
            { text: "<span>B</span> Broken tag", correct: false },
            { text: "<span>C</span> A broken one", correct: false },
            { text: '<span>D</span> Break tag', correct: true },
        ]
    },
    {
        question: "Choose the correct HTML element to define important text",
        answer: [
            { text: "<span>A</span> < strong >", correct: true },
            { text: "<span>B</span> < important >", correct: false },
            { text: "<span>C</span> < b >", correct: false },
            { text: "<span>D</span> < i >", correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element to define emphasized text",
        answer: [
            { text: "<span>A</span> < strong >", correct: false },
            { text: "<span>B</span> < em >", correct: true },
            { text: "<span>C</span> < br >", correct: false },
            { text: "<span>D</span> < italic >", correct: false },
        ]
    },
    {
        question: "Choose the correct HTML element to define a table cell",
        answer: [
            { text: "<span>A</span> < table >< tr >< tt >", correct: false },
            { text: "<span>B</span> < table >< head >< footer >", correct: false },
            { text: "<span>C</span> < table >< tr >< td >", correct: true },
            { text: "<span>D</span> < thead >< body >< tr >", correct: false },
        ]
    },
    {
        question: "How can you make a numbered list?",
        answer: [
            { text: "<span>A</span> < list >", correct: false },
            { text: "<span>B</span> < dl >", correct: false },
            { text: "<span>C</span> < ul >", correct: false },
            { text: "<span>D</span> < ol >", correct: true },
        ]
    },
    {
        question: "How can you make a bulleted list?",
        answer: [
            { text: "<span>A</span> < list >", correct: false },
            { text: "<span>B</span> < dl >", correct: false },
            { text: "<span>C</span> < ul >", correct: true },
            { text: "<span>D</span> < ol >", correct: false },
        ]
    },

    {
        question: "In which section or part of an HTML document is the meta tag typically located?",
        answer: [
            { text: "<span>A</span> The last page", correct: false },
            { text: "<span>B</span> Any page", correct: true },
            { text: "<span>C</span> First page", correct: false },
            { text: "<span>D</span> Second page", correct: false },
        ]
    },
];

const questionElement = document.getElementById('question');
const numberElement = document.getElementById('number');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const modalBtn = document.getElementById('modal-btn');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

let result = document.getElementById("score")
let currentQuestionIndex = 0;
let score = 0;

//displaying the content from "questions" variable
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    modalBtn.innerHTML = "Show Score";
    
    
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestion.question;
    numberElement.innerHTML = `Question ${questionNo}/${questions.length}`;

    currentQuestion.answer.forEach(answer => {
        
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {

    //every click on next button the previous question and selection will be disposed
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {

    //checking whether the selected answer is right or wrong
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        selectedBtn.style.backgroundColor = "#9aeabc";
        selectedBtn.style.color = "black"; 

    } else {
        selectedBtn.classList.add("incorrect");
        selectedBtn.style.backgroundColor = "#FFB0BA";
        selectedBtn.style.color = "black"; 

    }

    //hiding the next button unless answer has been chosen
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    if (currentQuestionIndex < questions.length - 1){
        nextButton.style.display = "block";
       
    }  
    //Add ka pa ng lilitaw yung para sa show score na button wag mo kalimutan
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 

        if(currentQuestionIndex < questions.length - 1){
            modalBtn.style.display = "none";
        } else {
            modalBtn.style.display = "block";
           
        } 

        modalBtn.onclick = function() {
            modal.style.display = "block";
          }
          span.onclick = function() {
            modal.style.display = "none";
          }
          
          result.innerHTML = score + `/${questions.length}`;
          
       
    } else {
        alert(`Quiz Over! Your score is ${score}/${questions.length}`);
        startQuiz();
    }
});

startQuiz();
