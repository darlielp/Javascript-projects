const personImg = document.querySelector(".img")
const personName = document.querySelector(".name")
const personJob = document.querySelector(".job")
const personRev = document.querySelector(".review")

const leftArrow = document.querySelector(".leftArrow")
const rightArrow = document.querySelector(".rightArrow")
const randomRev = document.querySelector(".btn")

let currentReview = 0

import reviews from "./reviews.js"

window.addEventListener("DOMContentLoad", () => {
  showReview(currentReview)
})


// show reviews
function showReview () {
  const info = reviews[currentReview]
  personImg.src = info.img
  personName.innerText = info.name
  personJob.innerText = info.job
  personRev.innerText = info.review
}

// left arrow reviews
leftArrow.addEventListener("click", () => {
  currentReview--
  if(currentReview < 0) {
    currentReview = reviews.length - 1
  }
  showReview()
})

// right arrow reviews
rightArrow.addEventListener("click", () => {
  currentReview++
  if(currentReview > reviews.length - 1) {
    currentReview = 0
  }
  showReview()
})

// random reviews
randomRev.addEventListener("click", () => {
  currentReview = Math.floor(Math.random() * reviews.length)
  showReview()
})