const url = "https://favicongrabber.com/api/grab/"
const alert = document.querySelector(".alert")
const button = document.querySelector(".btn");
const download = document.querySelector(".downBtn");
const searchBox = document.querySelector(".form-input");
const faviconImg = document.querySelector(".favicon-img");
const favContainer = document.querySelector(".favicon");


// fetch data from API
button.addEventListener("click", (e) => {
  e.preventDefault()
  img = url + searchBox.value;
  fetch(img) 
    .then((response) => response.json())
    .then((data) => showFavicon(data))
    .catch((err) => console.log(err))
})

// manipulate API data
function showFavicon({icons, error}) {
  if(searchBox.value === "" || error){
    showError()
    if(favContainer.classList.contains("show-favicon")) {
      favContainer.classList.remove("show-favicon")
    }
  } else {
    favContainer.classList.add("show-favicon");
    icons.map(function(icon) {
      faviconImg.src = icon.src
    })
  }
}

// show alert message
function showError() {
  alert.classList.add("show-alert")
  setTimeout(() => {
    alert.classList.remove("show-alert")
  }, 2000)
}

// generate favicon download
download.addEventListener("click", () => {
  const favDown = document.createElement('a');
  favDown.setAttribute("href",  faviconImg.src);
  favDown.setAttribute("download", "favicon");
  console.log(favDown);
  document.body.appendChild(favDown);
  favDown.click();
  document.body.removeChild(favDown);
})