const numbers = document.querySelectorAll(".number")

const updateCount = (el) => {
  const value = parseInt(el.dataset.value) // convert data-value to number
  const increment = Math.ceil(value / 1000)

  let initialValue = 0

  const increaseCount = setInterval(() => {
    initialValue += increment
    if(initialValue > value) {
      el.textContent = `${value}+`
      clearInterval(increaseCount)
      return
    }
    el.textContent = `${initialValue}+`
  }, 1)
}

// pass through all the numbers and update them.
numbers.forEach(number => {
  updateCount(number)
})