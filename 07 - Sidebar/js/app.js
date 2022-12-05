const openSidebar = document.querySelector(".sideBtn")
const closeSidebar = document.querySelector(".closeBtn")
const sidebar = document.querySelector(".sidebar")

openSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar")
})

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar")
})