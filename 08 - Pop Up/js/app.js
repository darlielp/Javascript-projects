const openPopUp = document.querySelector(".btn")
const closePopUp = document.querySelector(".closeBtn")
const popUp = document.querySelector(".popUp-container")

openPopUp.addEventListener("click", () => {
  popUp.style.display = "block"
  // document.body.style.background = "black"
})

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none"
})