const quizData = [
   {
      question : 'What is the correct place to insert JavaScript script?',
      a : 'The <head> section',
      b : 'The <body> section',
      c : 'Both <head> and <body> section are correct',
      d : 'None of the above',
      correct : 'c'
   },
   {
      question : 'Which HTML tag/element we use to insert the Javascript?',
      a : 'The <link> tag',
      b : 'The <script> tag ',
      c : 'The <a> tag',
      d : 'The <javascript>',
      correct : 'b'
   },
   {
      question : 'What is correct syntax for reffering external script file',
      a : '<script src="script.js">',
      b : '<script href="script.js">',
      c : '<link src="script.js">',
      d : '<a href="script.js">',
      correct : 'a'
   },
   {
      question : 'What will the following code return : ("10" === 10)',
      a : 'false',
      b : 'true',
      c : 'NaN',
      d : 'null',
      correct : 'b'
   },
   {
      question : 'What is the correct syntax to alert "Hello World"',
      a : 'msg("Hello World")',
      b : 'alertBox("Hello World")',
      c : 'alert("Hello World")',
      d : 'msgBox("Hello World")',
      correct : 'c'
   },
]

const questionEl = document.querySelector('#quizQuestion');
const opt_a = document.querySelector('#opt-a');
const opt_b = document.querySelector('#opt-b');
const opt_c = document.querySelector('#opt-c');
const opt_d = document.querySelector('#opt-d');
const checkBtn = document.querySelector('#check');
const nextBtn = document.querySelector('#next')
const resultTxt = document.querySelector('#result'); 
const checkedOpt = document.querySelectorAll('input[name="opt"]');
const quizContainer = document.querySelector('.quizContainer');
const mainContainer = document.querySelector('.card');
const resetBtn = document.querySelector('#reset');
const headingEl = document.querySelector('h1')

let currentQuestion = 0
let score = 0
let quizQuestion = null

// Setting Question
const setQuestion = () => {
   if(currentQuestion < quizData.length){
      quizQuestion = quizData[currentQuestion]
      questionEl.innerText = quizQuestion.question;
      opt_a.innerText = quizQuestion.a
      opt_b.innerText = quizQuestion.b
      opt_c.innerText = quizQuestion.c
      opt_d.innerText = quizQuestion.d
      return quizQuestion;
   }
   
}
// initial call to load first question 
setQuestion()


// Checking the Answer
const selectedOpt = () => {
   checkedOpt.forEach(answer => {
      if(answer.checked){
         if(answer.value === quizQuestion.correct){
            score += 5;
            resultTxt.innerText = 'Right Answer! You get +5 points';
            resultTxt.classList.add('correctAns');
         }else{
            resultTxt.innerText = `Incorrect! Answer is : ${quizQuestion.correct}`;
            resultTxt.classList.add('incorrectAns');
         }
      }
   })
}

// Button to Check the Answer
checkBtn.addEventListener('click', ()=> {
   selectedOpt();
   checkBtn.disabled = true
})

// Button to move to Next Question
nextBtn.addEventListener('click', ()=> {
   if(currentQuestion + 1 < quizData.length){
      currentQuestion ++;
      resultTxt.innerText = '';
      resultTxt.classList.remove('correctAns');
      resultTxt.classList.remove('incorrectAns');
      checkBtn.disabled = false;
      checkedOpt.forEach(option => {
         option.checked= false;
      })
      setQuestion()
   }else{
      resultTxt.innerText = '';
      resultTxt.classList.remove('correctAns');
      resultTxt.classList.remove('incorrectAns');
      quizContainer.style.display = "none";
      headingEl.innerText = `Quiz Completed! Your score is : ${score}`;
   }
})

// resetting the quiz
resetBtn.addEventListener('click', () => {
   currentQuestion = 0;
   score = 0;
   quizQuestion = null
   if(resultTxt.innerText){
      resultTxt.innerText = '';
      resultTxt.classList.remove('correctAns');
      resultTxt.classList.remove('incorrectAns');
   }
   checkedOpt.forEach(option => {
      option.checked = false;
   })
   headingEl.innerText = 'Welcome To the Quiz!' 
   if(quizContainer.style.display === 'none'){
      quizContainer.style.display = 'block';
   }
   setQuestion()
})


