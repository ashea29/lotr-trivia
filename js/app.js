// GET DOM ELEMENTS
const innerContainer = document.getElementById("inner-container");
const scoreControl = document.getElementById("score-control");
const numberCorrect = document.getElementById("number-correct");
const gc1 = document.getElementById("gc1");
const questionNumber = document.getElementById("question-number");
const startGameMsg = document.getElementById("start-game-msg")
const winGameMsg = document.getElementById("win-game-msg")
const gc3 = document.getElementById("gc3");
const question = document.getElementById("question")
const gc4 = document.getElementById("gc4");
const gc5 = document.getElementById("gc5");
const gc6 = document.getElementById("gc6");
const startBtn = document.getElementById("start-btn");


// CONVERT ANSWER-REFS NODELIST TO AN ARRAY
const answerControlNodes = document.querySelectorAll(".answer-control");
let answerControls = Array.from(answerControlNodes);

// CONVERT ANSWER-REFS NODELIST TO AN ARRAY
const answerRefNodes = document.querySelectorAll(".answerRef");
let answerRefs = Array.from(answerRefNodes);

// CONVERT 'ANSWER' NODELIST TO AN ARRAY
const answerNodeList = document.querySelectorAll(".answer");
let answers = Array.from(answerNodeList);


// GET ALL GAME ELEMENTS (FOR WIN CONDITION)
const gameElements = [gc1, gc2, gc3, gc4, answers[0], answers[1], answers[2], answers[3], answerRefs[0], answerRefs[1], answerRefs[2], answerRefs[3]];


//ASSIGN ALL THE GAME QUESTIONS TO VARIABLES
const question1 = "After Frodo was wounded on Weathertop, Arwen takes  him to Rivendell to be healed. Along the way, against which creatures does she cause the river to rise to stop their pursuit of her and Frodo?"
const question2 = "How many Rings of Power did Sauron make?"
const question3 = "In the Fellowship of the Ring, what does Galadriel give to Frodo before the Fellowship departs?"
const question4 = "Throughout all three movies, how many times total does Frodo put on the One Ring?"
const question5 = "Which hobbit offers himself in service to Denethor, Steward of Gondor?"
const question6 = "What is (or what are) the Palantir?"
const question7 = "In which country was the entire movie trilogy filmed?"


//SETS ALL ANSWER CHOICES FOR EACH QUESTION TO AN ARRAY 
const q1AnswerSet = ["Maiar", "Nazgul", "Uruk-hai", "Orcs"]
const q2AnswerSet = ["7", "25", "20", "9"]
const q3AnswerSet = ["Mithril shirt", "The Light of Earendil", "A sword", "A golden brooch"]
const q4AnswerSet = ["3", "5", "2", "4"]
const q5AnswerSet = ["Bilbo", "Pippin", "Merry", "Frodo"]
const q6AnswerSet = ["One of the lost seeing-stones", "Aragorn's sword", "The bridge in the mines of Moria", "An offshoot race of the Elves"]
const q7AnswerSet = ["Denmark", "Finland", "England", "New Zealand"]


// SCORING MECHANISM
let score = 0;
let correct;
function incrementScore () {
  score++;
  numberCorrect.innerHTML = score.toString();
}
  

//SETS ALL THE TEXT FOR EACH QUESTION AND ANSWER SET
function displayQuestion(qNumber, q, answerSet) {
    questionNumber.innerHTML = `QUESTION ${qNumber.toString().toUpperCase()}`;
    gc1.classList.remove('hidden');
    question.innerHTML = q;
    gc3.classList.remove('hidden');
    gc4.classList.remove('hidden');

    answers.forEach((item, index) => {
      item.classList.remove('hidden');
      item.innerHTML = answerSet[index];
    })

    answerRefs.forEach((item) => {
      item.classList.remove('hidden');
    })

}


// GO TO NEXT QUESTION
const nextQuestion = () => {
  switch (questionNumber.innerHTML) {
    case "QUESTION ONE":
      secondQuestion();
      break;
    case "QUESTION TWO":
      thirdQuestion();
      break;
    case "QUESTION THREE":
      fourthQuestion();
      break;
    case "QUESTION FOUR":
      fifthQuestion();
      break;
    case "QUESTION FIVE":
      sixthQuestion();
      break;
    case "QUESTION SIX":
      seventhQuestion();
      break;
    case "QUESTION SEVEN":
      scoreScreen();
      break;
  }
}


// HANDLE SELECTED ANSWER
const checkAnswer = (evt) => {
  if (evt.target === correct) {
      evt.target.classList.add('selected');
      evt.target.innerHTML = "CORRECT!"
      incrementScore();
      setTimeout(() => {
        evt.target.classList.remove('selected');
        resetAnswers()
        nextQuestion();
      }, 2500)
  } else {
      evt.target.classList.add('selected');
      evt.target.innerHTML = "INCORRECT!";
      setTimeout(() => {
        evt.target.classList.remove('selected');
        resetAnswers()
        nextQuestion();
      }, 2500)
  }
}


// ATTACH EVENT LISTENERS TO ANSWER CHOICES
function handleSelection () {
    answers[0].addEventListener('click', checkAnswer);
    answers[1].addEventListener('click', checkAnswer);
    answers[2].addEventListener('click', checkAnswer);
    answers[3].addEventListener('click', checkAnswer);
}


// RESET ANSWERS (REMOVE ANSWER-FEEDBACK CLASS & EVENT LISTENERS)
function resetAnswers () {
  answers[0].removeEventListener('click', checkAnswer);
  answers[1].removeEventListener('click', checkAnswer);
  answers[2].removeEventListener('click', checkAnswer);
  answers[3].removeEventListener('click', checkAnswer);
}


// RESET GAME TO STARTING SCREEN
const resetGame = () => {
  window.location.reload()
}


// FUNCTION TO START GAME
const beginGame = () => {
  startGameMsg.classList.add('hidden');
  firstQuestion()
}
  

// INITIALIZE GAME WHEN THE START BUTTON IS CLICKED
startBtn.addEventListener('click', beginGame)


//FUNCTIONS FOR EACH QUESTION
function firstQuestion(){
    correct = answers[1];

    //CHANGE INNERHTML AND FUNCTIONALITY OF STARTBTN DURING GAMEPLAY
    startBtn.removeEventListener('click', beginGame);
    startBtn.classList.remove('me-font-sm');
    startBtn.classList.add('me-font-xs');
    startBtn.innerHTML = "RESET GAME";
    startBtn.style.marginTop = "3rem";
    startBtn.addEventListener('click', resetGame);
    scoreControl.classList.remove('hidden');

    displayQuestion('one', question1, q1AnswerSet);

    answerControls.forEach((item) => {
      item.addEventListener('mouseover', (e) => {
        item.style.cursor = "pointer";
        item.children[0].classList.add('highlight');
        item.children[1].classList.add('highlight');
      })
      item.addEventListener('mouseout', (e) => {
        item.style.cursor = "default";
        item.children[0].classList.remove('highlight');
        item.children[1].classList.remove('highlight');
      })
    })

    handleSelection();
}

function secondQuestion(){
    correct = answers[2];
    displayQuestion('two', question2, q2AnswerSet);
    handleSelection();
}


function thirdQuestion(){
    correct = answers[1];
    displayQuestion('three', question3, q3AnswerSet);
    handleSelection();
}


function fourthQuestion(){
    correct = answers[3];
    displayQuestion('four', question4, q4AnswerSet);
    handleSelection();
}


function fifthQuestion(){
    correct = answers[1];
    displayQuestion('five', question5, q5AnswerSet);
    handleSelection();
}


function sixthQuestion(){
    correct = answers[0];
    displayQuestion('six', question6, q6AnswerSet);
    handleSelection();
}


function seventhQuestion(){
    correct = answers[3];
    displayQuestion('seven', question7, q7AnswerSet);
    handleSelection();
}


function scoreScreen() {
    innerContainer.classList.remove('flexcolumn')
    innerContainer.style.display = "flex";
    innerContainer.style.flexDirection = "column";
    innerContainer.style.justifyContent = "center";
    startBtn.classList.add('hidden');

    gameElements.forEach((element) => {
        element.classList.add('hidden');
    });

    winGameMsg.style.color = '#fcdd66';
    if (score >= 4){
      winGameMsg.innerHTML = "CONGRATULATIONS, YOU WIN!"
    } else {
      winGameMsg.innerHTML = `SORRY... YOU ONLY GOT ${score} CORRECT ANSWERS. TRY AGAIN!`
    }
    gc5.classList.remove('hidden');

    setTimeout(() => {
        resetGame();
    }, 3000);
}

