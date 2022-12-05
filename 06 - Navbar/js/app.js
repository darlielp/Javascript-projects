const menuBtn = document.querySelector(".menuBtn")
const menuContainer = document.querySelector(".menuList")

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("show-list")
})