// debug selectors
function getElement (selector) {
  const el = document.querySelector(selector)
  if(el) {
    return el
  } else {
    throw new Error (`Please check "${selector}" selector, no such element exists.`)
  }
}

// selectors
const selectMode = getElement('.select-mode')
const vsPlayer = getElement('.player')
const vsCpu = getElement('.cpu')
const returnToSelect = getElement('.return')
const ticTacToe = getElement('.tic-tac-toe')
const board = getElement('.board')
const box = document.querySelectorAll('.box')
const alert = getElement(".alert")
const resetScore = getElement(".reset")

let player1 = 0
let player2 = 0
let cpu = 0

// events
vsPlayer.addEventListener("click", startGame)
vsCpu.addEventListener("click", startGame)
resetScore.addEventListener("click", clearScoreBoard)
returnToSelect.addEventListener("click", () => window.location.reload())

// start a new game
function startGame (btn) {
  ticTacToe.style.display = "block"
  if(btn.target.contains(vsPlayer)) {
    selectMode.style.display = "none"
    playerVsPlayer()
  } else {
    selectMode.style.display = "none"
    playerVsCpu()
  }
}

// player vs player 
function playerVsPlayer () {
  box.forEach(element => {
    element.addEventListener("click", (e) => {
      if(element.childNodes.length == 0) {
        if(player1 == player2) {
          player1++
          e.target.innerHTML = `<i class="fas fa-times cross"></i>`
        } else {
          player2++
          e.target.innerHTML = `<i class="far fa-circle circle"></i>`
        }
      }
        gameRule()
    })
  })
}

// player vs cpu
function playerVsCpu () {
  box.forEach(element => {
    element.addEventListener("click", (e) => {
      if(element.childNodes.length == 0) {
        if(player1 == cpu) {
          player1++
          e.target.innerHTML = `<i class="fas fa-times cross"></i>`
        } if (cpu !== player1) {
          cpuPlay()
          cpu++
        }
      }
        gameRule()
    })
  })
}

// cpu moves
function cpuPlay () {
  let circle = `<i class="far fa-circle circle"></i>`
  let counter = 0
  let fillBox= 0

  for(i = 0; i < box.length; i++) {
    let randomNum = Math.floor(Math.random() * 5)

    if(box[i].childNodes.length == 0) {
      if(randomNum <= 1) {
        box[i].innerHTML = circle
        counter++
        break;
      } else {
        fillBox++
      }
    }
  }
}

// game rules
function gameRule () {
  const b1 = getElement(".box-1")
  const b2 = getElement(".box-2")
  const b3 = getElement(".box-3")
  const b4 = getElement(".box-4")
  const b5 = getElement(".box-5")
  const b6 = getElement(".box-6")
  const b7 = getElement(".box-7")
  const b8 = getElement(".box-8")
  const b9 = getElement(".box-9")

  // horizontal

  // first line
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
    const b1Check = b1.childNodes[0].classList
    const b2Check = b2.childNodes[0].classList
    const b3Check = b3.childNodes[0].classList

    if(b1Check.contains("cross") && b2Check.contains("cross") && b3Check.contains("cross")) {
      declareWinner("cross")
    } else if(b1Check.contains("circle") && b2Check.contains("circle") && b3Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // second line
  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
    const b4Check = b4.childNodes[0].classList
    const b5Check = b5.childNodes[0].classList
    const b6Check = b6.childNodes[0].classList

    if(b4Check.contains("cross") && b5Check.contains("cross") && b6Check.contains("cross")) {
      declareWinner("cross")
    } else if(b4Check.contains("circle") && b5Check.contains("circle") && b6Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // third line
  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
    const b7Check = b7.childNodes[0].classList
    const b8Check = b8.childNodes[0].classList
    const b9Check = b9.childNodes[0].classList

    if(b7Check.contains("cross") && b8Check.contains("cross") && b9Check.contains("cross")) {
      declareWinner("cross")
    } else if(b7Check.contains("circle") && b8Check.contains("circle") && b9Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // vertical

  // first line
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
    const b1Check = b1.childNodes[0].classList
    const b4Check = b4.childNodes[0].classList
    const b7Check = b7.childNodes[0].classList

    if(b1Check.contains("cross") && b4Check.contains("cross") && b7Check.contains("cross")) {
      declareWinner("cross")
    } else if(b1Check.contains("circle") && b4Check.contains("circle") && b7Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // second line
  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
    const b2Check = b2.childNodes[0].classList
    const b5Check = b5.childNodes[0].classList
    const b8Check = b8.childNodes[0].classList

    if(b2Check.contains("cross") && b5Check.contains("cross") && b8Check.contains("cross")) {
      declareWinner("cross")
    } else if(b2Check.contains("circle") && b5Check.contains("circle") && b8Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // third line
  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
    const b3Check = b3.childNodes[0].classList
    const b6Check = b6.childNodes[0].classList
    const b9Check = b9.childNodes[0].classList

    if(b3Check.contains("cross") && b6Check.contains("cross") && b9Check.contains("cross")) {
      declareWinner("cross")
    } else if(b3Check.contains("circle") && b6Check.contains("circle") && b9Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // diagonal

  // first line
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
    const b1Check = b1.childNodes[0].classList
    const b5Check = b5.childNodes[0].classList
    const b9Check = b9.childNodes[0].classList

    if(b1Check.contains("cross") && b5Check.contains("cross") && b9Check.contains("cross")) {
      declareWinner("cross")
    } else if(b1Check.contains("circle") && b5Check.contains("circle") && b9Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // second line
  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
    const b3Check = b3.childNodes[0].classList
    const b5Check = b5.childNodes[0].classList
    const b7Check = b7.childNodes[0].classList

    if(b3Check.contains("cross") && b5Check.contains("cross") && b7Check.contains("cross")) {
      declareWinner("cross")
    } else if(b3Check.contains("circle") && b5Check.contains("circle") && b7Check.contains("circle")) {
      declareWinner("circle")
    }
  }

  // draw
  let counter = 0

  for(let i = 0; i < box.length; i++) {
    if(box[i].childNodes[0] != undefined) {
      counter++
    }
  }

  if(counter == 9) {
    declareWinner()
  }
}

// declare winner and start a new game
function declareWinner(winner) {

  const scoreCross = getElement(".score-cross").childNodes[1]
  const scoreCircle = getElement(".score-circle").childNodes[1]

  // check if winner is player1, player2 or a draw game
  if(winner == "cross") {
    scoreCross.innerText = parseInt(scoreCross.innerText) + 1
    alert.innerHTML = `<h1>player 1 wins!!</h1>`
    alert.style.display = "block"
  } else if(winner == "circle"){
    scoreCircle.innerText = parseInt(scoreCircle.innerText) + 1
    alert.innerHTML =  `<h1>player 2 wins!!</h1>`
    alert.style.display = "block"
  } else {
    alert.innerHTML = `<h1>Draw!!</h1>`
    alert.style.display = "block"
  }

  // hide alert
  setTimeout(() => {
    alert.style.display = "none"
  }, 3000)

  // clear moves
  player1 = 0
  player2 = 0
  cpu = 0

  // remove pieces
  box.forEach(piece => {
    piece.innerHTML = ""
  })
}

// clear score board
function clearScoreBoard () {
  const scoreCross = getElement(".score-cross").childNodes[1]
  const scoreCircle = getElement(".score-circle").childNodes[1]

  // reset score
  scoreCross.innerText = 0
  scoreCircle.innerText = 0

  // clear moves
  player1 = 0
  player2 = 0
  cpu = 0

  // remove pieces
  box.forEach(piece => {
    piece.innerHTML = ""
  })
}