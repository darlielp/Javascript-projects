const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const img = document.querySelectorAll(".img")

let counter = 0

// positions slides to the left
img.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`
})

const carousel = () => {
  if(counter > img.length - 1) {
    counter = 0
  } 

  if(counter < 0) {
    counter = img.length - 1
  } 

  // moves slides by multiplying counter position * 100.
  img.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

// run next slides
next.addEventListener("click", () => {
  counter++
  clearInterval(slideInterval)
  carousel()
  slideInterval = setInterval(() => {
    counter++
    carousel()
  }, 5000)
})

// run previous slides
prev.addEventListener("click", () => {
  counter--
  clearInterval(slideInterval)
  carousel()
  slideInterval = setInterval(() => {
    counter++
    carousel()
  }, 5000)
})

// timer to auto run slides after 5s
let slideInterval = setInterval(() => {
  counter++
  carousel()
}, 5000);
