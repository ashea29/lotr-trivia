//ASSIGNS ALL THE GAME QUESTIONS TO VARIABLES
const question1 = "After Frodo was wounded on Weathertop, and Arwen takes him and begins heading to Rivendell to be cured, against which creatures does she cause the river to rise to stop their pursuit of her and Frodo?"
console.log(question1)

const question2 = "How many Rings of Power did Sauron make?"
console.log(question2)

const question3 = "In the Fellowship of the Ring, what does Galadriel give to Frodo before the Fellowship departs?"
console.log(question3)

const question4 = "Throughout all three movies, how many times total does Frodo put on the One Ring?"
console.log(question4)

const question5 = "Which hobbit offers himself in service to Denethor, Steward of Gondor?"
console.log(question5)

const question6 = "What is/are the Palantir?"
console.log(question6)

const question7 = "In which country was the entire movie trilogy filmed?"
console.log(question7)



//SETS ALL ANSWER CHOICES FOR EACH QUESTION TO AN ARRAY 
const q1AnswerSet = ["Maiar", "Nazgul", "Uruk-hai", "Orcs"]
console.log(q1AnswerSet)

const q2AnswerSet = ["7", "25", "20", "9"]
console.log(q2AnswerSet)

const q3AnswerSet = ["Mithril shirt", "A sword", "The Light of Earendil", "A golden brooch"]
console.log(q3AnswerSet)

const q4AnswerSet = ["3", "5", "2", "4"]
console.log(q4AnswerSet)

const q5AnswerSet = ["Bilbo", "Pippin", "Merry", "Frodo"]
console.log(q5AnswerSet)

const q6AnswerSet = ["One of the lost seeing-stones", "Aragorn's sword", "The bridge in the mines of Moria", "An offshoot race of the Elves"]
console.log(q6AnswerSet)

const q7AnswerSet = ["Denmark", "Finland", "England", "New Zealand"]
console.log(q7AnswerSet)


//SELECTS AND STORES VARIOUS ELEMENTS TO VARIABLES
const startBtn = document.querySelector('#startBtn')
console.log(startBtn)


const questionNumber = document.querySelector('#questionNumber')
console.log(questionNumber)

const startGameMsg = document.querySelector('#startGameMsg')


const question = document.querySelector('#question')
console.log(question)

const choice1 = document.querySelector('#answer1')
const choice2 = document.querySelector('#answer2')
const choice3 = document.querySelector('#answer3')
const choice4 = document.querySelector('#answer4')


//SETS ALL CHOICE VARIABLES TO AN ARRAY SO THEY CAN BE LOOPED OVER LATER
const answerArray = [choice1, choice2, choice3, choice4]



//VARIOUS FUNCTION DECLARATIONS TO BE USED IN THE GAME LOGIC
const incorrectAnswer = () => {alert('INCORRECT...TRY AGAIN')}

const correctAnswer1 = () => {
  alert('CORRECT!')
  secondQuestion()
}

const correctAnswer2 = () => {
  alert('CORRECT!')
  thirdQuestion()
}

const correctAnswer3 = () => {
  alert('CORRECT!')
  fourthQuestion()
}

const correctAnswer4 = () => {
  alert('CORRECT!')
  fifthQuestion()
}

const correctAnswer5 = () => {
  alert('CORRECT!')
  sixthQuestion()
}

const correctAnswer6 = () => {
  alert('CORRECT!')
  seventhQuestion()
}

const correctAnswer7 = () => {
  alert('CONGRATULATIONS, YOU WIN! If you want to play again, click RESET GAME')
}

const resetGame = () => {
  window.location.reload()
}

const beginGame = () => {
  firstQuestion()
}


//BEGINS THE GAME WHEN THE START BUTTON IS CLICKED
startBtn.addEventListener('click', beginGame)



function firstQuestion(){
    //ADDS THE HOVER CLASS TO ALL THE ANSWER DIVS
    answerArray.map((item) => {
      item.classList.add('hover')
    })

    //SETTS ALL THE TEXT FOR QUESTION ONE
    questionNumber.innerHTML = "QUESTION ONE:"
    startGameMsg.innerHTML = ""
    question.innerHTML = question1
    choice1.innerHTML = q1AnswerSet[0]
    choice2.innerHTML = q1AnswerSet[1]
    choice3.innerHTML = q1AnswerSet[2]
    choice4.innerHTML = q1AnswerSet[3]

    startBtn.removeEventListener('click', beginGame)

    startBtn.innerHTML = "RESET GAME"

    startBtn.addEventListener('click', resetGame)

    //EVENT LISTENERS:
    choice1.addEventListener('click', incorrectAnswer)
    choice2.addEventListener('click', correctAnswer1)
    choice3.addEventListener('click', incorrectAnswer)
    choice4.addEventListener('click', incorrectAnswer)
}

function secondQuestion(){
  questionNumber.innerHTML = "QUESTION TWO:"
  question.innerHTML = question2
  choice1.innerHTML = q2AnswerSet[0]
  choice2.innerHTML = q2AnswerSet[1]
  choice3.innerHTML = q2AnswerSet[2]
  choice4.innerHTML = q2AnswerSet[3]

  choice1.removeEventListener('click', incorrectAnswer)
  choice2.removeEventListener('click', correctAnswer1)
  choice3.removeEventListener('click', incorrectAnswer)
  choice4.removeEventListener('click', incorrectAnswer)
  
  //NEW EVENT LISTENERS:
  choice1.addEventListener('click', incorrectAnswer)
  choice2.addEventListener('click', incorrectAnswer)
  choice3.addEventListener('click', correctAnswer2)
  choice4.addEventListener('click', incorrectAnswer)
}


function thirdQuestion(){
  // choice1.removeEventListener('click', incorrectAnswer)
  // choice2.removeEventListener('click', incorrectAnswer)
  choice3.removeEventListener('click', correctAnswer2)
  // choice4.removeEventListener('click', incorrectAnswer)

  questionNumber.innerHTML = "QUESTION THREE:"
  question.innerHTML = question3
  choice1.innerHTML = q3AnswerSet[0]
  choice2.innerHTML = q3AnswerSet[1]
  choice3.innerHTML = q3AnswerSet[2]
  choice4.innerHTML = q3AnswerSet[3]

  //NEW EVENT LISTENER:
  // choice1.addEventListener('click', incorrectAnswer)
  // choice2.addEventListener('click', incorrectAnswer)
  choice3.addEventListener('click', correctAnswer3)
  // choice4.addEventListener('click', incorrectAnswer)
}


function fourthQuestion(){
  questionNumber.innerHTML = "QUESTION FOUR:"
  question.innerHTML = question4
  choice1.innerHTML = q4AnswerSet[0]
  choice2.innerHTML = q4AnswerSet[1]
  choice3.innerHTML = q4AnswerSet[2]
  choice4.innerHTML = q4AnswerSet[3]

  choice1.removeEventListener('click', incorrectAnswer)
  choice2.removeEventListener('click', incorrectAnswer)
  choice3.removeEventListener('click', correctAnswer3)
  choice4.removeEventListener('click', incorrectAnswer)

  choice1.addEventListener('click', incorrectAnswer)
  choice2.addEventListener('click', incorrectAnswer)
  choice3.addEventListener('click', incorrectAnswer)
  choice4.addEventListener('click', correctAnswer4)
}


function fifthQuestion(){
  questionNumber.innerHTML = "QUESTION FIVE:"
  question.innerHTML = question5
  choice1.innerHTML = q5AnswerSet[0]
  choice2.innerHTML = q5AnswerSet[1]
  choice3.innerHTML = q5AnswerSet[2]
  choice4.innerHTML = q5AnswerSet[3]

  choice1.removeEventListener('click', incorrectAnswer)
  choice2.removeEventListener('click', incorrectAnswer)
  choice3.removeEventListener('click', incorrectAnswer)
  choice4.removeEventListener('click', correctAnswer4)
  
  choice1.addEventListener('click', incorrectAnswer)
  choice2.addEventListener('click', correctAnswer5)
  choice3.addEventListener('click', incorrectAnswer)
  choice4.addEventListener('click', incorrectAnswer)
}


function sixthQuestion(){
  questionNumber.innerHTML = "QUESTION SIX:"
  question.innerHTML = question6
  choice1.innerHTML = q6AnswerSet[0]
  choice2.innerHTML = q6AnswerSet[1]
  choice3.innerHTML = q6AnswerSet[2]
  choice4.innerHTML = q6AnswerSet[3]

  choice1.removeEventListener('click', incorrectAnswer)
  choice2.removeEventListener('click', correctAnswer5)
  choice3.removeEventListener('click', incorrectAnswer)
  choice4.removeEventListener('click', incorrectAnswer)

  choice1.addEventListener('click', correctAnswer6)
  choice2.addEventListener('click', incorrectAnswer)
  choice3.addEventListener('click', incorrectAnswer)
  choice4.addEventListener('click', incorrectAnswer)
}


function seventhQuestion(){
  questionNumber.innerHTML = "QUESTION SEVEN:"
  question.innerHTML = question7
  choice1.innerHTML = q7AnswerSet[0]
  choice2.innerHTML = q7AnswerSet[1]
  choice3.innerHTML = q7AnswerSet[2]
  choice4.innerHTML = q7AnswerSet[3]

  choice1.removeEventListener('click', correctAnswer6)
  choice2.removeEventListener('click', incorrectAnswer)
  choice3.removeEventListener('click', incorrectAnswer)
  choice4.removeEventListener('click', incorrectAnswer)

  choice1.addEventListener('click', incorrectAnswer)
  choice2.addEventListener('click', incorrectAnswer)
  choice3.addEventListener('click', incorrectAnswer)
  choice4.addEventListener('click', correctAnswer7)
}