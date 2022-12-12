const showAnswer = document.querySelectorAll(".fa-plus-square")
const occultAnswer = document.querySelectorAll(".fa-minus-square")

showAnswer.forEach((show) => {
  show.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.parentElement.parentElement
    const occult = e.currentTarget.parentElement.lastElementChild

    answer.classList.add("show-answer")
    show.style.display = "none"
    occult.style.display = "block"
  })
})

occultAnswer.forEach((occult) => {
  occult.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.parentElement.parentElement
    const show = e.currentTarget.parentElement.firstElementChild

    answer.classList.remove("show-answer")
    occult.style.display = "none"
    show.style.display = "block"
  })
})