const video = document.querySelector(".video")
const switchBtn = document.querySelector(".switch-btn")
const switchTog = document.querySelector(".switch")
const loading = document.querySelector(".loading")

// load content before display and show a loading image
window.addEventListener("load", () => {
  loading.style.display = "none"
})

// play and pause background video
switchBtn.addEventListener("click", () => {
  switchTog.classList.toggle("pause")

  if(switchTog.classList.contains("pause")) {
    video.pause()
  } else {
    video.play()
  }
})

