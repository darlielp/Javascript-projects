import getElement from "./getElement.js";

const img = getElement(".img")
const infoTitle = getElement(".info-title")
const userInfo = getElement(".user-info")
const infoIcons = [...document.querySelectorAll(".icon")]

const displayUser = (person) => {
  img.src = person.image
  infoTitle.innerText = `My Name Is`
  userInfo.innerText = person.name
  infoIcons.forEach((btn) => btn.classList.remove("active"))
  infoIcons[0].classList.add("active")
  infoIcons.forEach((btn) => {
    const info = btn.dataset.info
    btn.addEventListener("click", () => {
      infoTitle.innerText = `My ${info} is`
      userInfo.innerText = person[info]
      infoIcons.forEach((btn) => btn.classList.remove("active"))
      btn.classList.add("active")
    })
  })
}


export default displayUser