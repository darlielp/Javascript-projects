const months = [
  "january", 
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
]

const week = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
]

const countEndDate = document.querySelector(".countdown-end")
const countdown = document.querySelector(".countdown")
const countTimer = document.querySelectorAll(".countdown h4")

// set countdown date.
let newYear = new Date(2024, 0, 1, 00, 00, 00)

// get year, hour, minute, date, month and day
const year = newYear.getFullYear()
const hours = newYear.getHours()
const minutes = newYear.getMinutes()
const date = newYear.getDate()

let month = newYear.getMonth()
month = months[month]
let day = newYear.getDay()
day = week[day]

countEndDate.innerHTML = `a new year starts on <span class="date">${day}, ${date} ${month} ${year}</span>`

const timeLeft = newYear.getTime()

function getRemainingTime() {
  // calc remaining time from today until the end date.
  const today = new Date().getTime()
  const remainingTime = timeLeft - today

  // get a full day, hour and minute in milliseconds.
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000

  // convert milliseconds to real time.
  let days = Math.floor(remainingTime / oneDay)
  let hours = Math.floor((remainingTime % oneDay) / oneHour)
  let minutes = Math.floor((remainingTime % oneHour) / oneMinute)
  let seconds = Math.floor((remainingTime % oneMinute) / 1000)

  const arrDate = [days, hours, minutes, seconds]

  // formats the date to add 0 in front of the number
  function formatDate(date) {
    if(date < 10) {
      return date = `0${date}`
    } 
    return date
  }

  countTimer.forEach((date, index) => {
    date.innerHTML = formatDate(arrDate[index])
  })

  if(remainingTime < 0) {
    clearInterval(timer)
    countdown.innerHTML = `<h3 class="message">happy new year! <p>${year}</p></h3>`
  }
}

let timer = setInterval(getRemainingTime, 1000)
getRemainingTime() 
