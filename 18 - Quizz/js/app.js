function getElement(element) {
  const el = document.querySelector(element)
  if(el) {
    return el
  } else {
    throw new Error (`Please check "${selector}" selector, no such element exists.`)
  }
}

const questionTitle = getElement(".quizz-question")
const answers = getElement(".quizz-answers")
const quizzContainer = getElement(".quizz-container")
const scoreContainer = getElement(".score-container")
const letters = ["a", "b", "c", "d"]

let points = 0
let actualQuestion = 0

import questions from "./questions.js";

// start quizz
function startQuizz() {
  createQuestion(0)
}

// create questions
function createQuestion(quest) {
  // remove previous answers
  const answer = answers.querySelectorAll(".answer")
  answer.forEach(answ => answ.remove())
  // change question title
  questionTitle.innerHTML = `<h5>${quest + 1} - ${questions[quest].question}</h5>`
  createAnswers(quest)
  actualQuestion++
}

// create answers
function createAnswers(quest) {
  questions[quest].answers.forEach((answer, quest) => {
    // clone answer button from html
    const questAnswer = getElement(".answer").cloneNode(true)
    const answerLetters = questAnswer.querySelector(".answer-letter")
    const answerText =  questAnswer.querySelector(".answer-text")

    answerLetters.textContent = letters[quest]
    answerText.textContent = answer["answer"]
    questAnswer.setAttribute("correct-answer", answer["correct"])
    questAnswer.classList.remove("hide")
    answers.appendChild(questAnswer)

    questAnswer.addEventListener("click", function() {
      checkAnswer(this)
    })
  })
}

// check answers
function checkAnswer(checkAns) {
  const answersQuest = answers.querySelectorAll(".answer")
  // check if the answer is correct
  answersQuest.forEach(function(answer) {
    if(answer.getAttribute("correct-answer") === "true") {
      answer.classList.add("correct-answer")
      if(checkAns === answer) {
        points++
      }
    } else {
      answer.classList.add("wrong-answer")
    }
  })
  nextQuestion()
}

// go to the next question
function nextQuestion() {
  setTimeout(function() {
    if(actualQuestion >= questions.length) {
      showSuccessMsg()
      return
    }
    createQuestion(actualQuestion)
  }, 1500)
}

// shows result
function showSuccessMsg() {
  hideOrShowQuizz()
  // calc score
  const score = ((points/questions.length) * 100).toFixed(2)
  const displayScore = getElement(".score-percent")
  displayScore.textContent = score.toString()

  // change numbers of correct answers
  const correctAnswers = getElement(".correct-answers")
  correctAnswers.textContent = points

  // change total question
  const totalQuestions = getElement(".total-questions") 
    totalQuestions.textContent = questions.length
}

// show or hide quizz
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide")
  scoreContainer.classList.toggle("hide")
}

// restart quizz
const restartQuizz = getElement(".restart")
restartQuizz.addEventListener("click", () => {
  actualQuestion = 0
  points = 0
  hideOrShowQuizz()
  startQuizz()
})

startQuizz()