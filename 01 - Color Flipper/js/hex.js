const clickHere = document.querySelector('.clickHere')
const reset = document.querySelector('.reset')
const colors = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let colorId = document.querySelector('.colorId')

// random btn
clickHere.addEventListener('click', () => {
  let newArr = '#'
  let changeColor = ''
  for(i = 0; i < 6; i++) {
    changeColor = newArr += colors[Math.floor(Math.random() * colors.length)]
  }
  document.body.style.background = changeColor
  colorId.innerText = changeColor
  colorId.style.color = changeColor
})

// reset btn
reset.addEventListener('click', () => {
  document.body.style.background = "#f8fafc"
  colorId.innerHTML = "#f8fafc"
  colorId.style.color = "#f8fafc"
})