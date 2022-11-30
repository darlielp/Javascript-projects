const clickHere = document.querySelector('.clickHere')
const reset = document.querySelector('.reset')
const colors = ['red', 'blue', 'green', 'cyan', "darkkhaki", "deeppink"]
let colorId = document.querySelector('.colorId')

// random btn
clickHere.addEventListener('click', () => {
  const changeColor = colors[Math.floor(Math.random() * colors.length)]
  document.body.style.background = changeColor
  colorId.innerText = changeColor
  colorId.style.color = changeColor
})

// reset btn
reset.addEventListener('click', () => {
  document.body.style.background = "aliceblue"
  colorId.innerHTML = "aliceblue"
  colorId.style.color = "aliceblue"
})