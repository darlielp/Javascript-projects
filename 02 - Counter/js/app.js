const numCount = document.querySelector('.numCount')
const increase = document.querySelector('.increase')
const reset = document.querySelector('.reset')
const decrease = document.querySelector('.decrease')

let num = 0

// increase
increase.addEventListener('click', () => {
    num++
    numCount.innerText = num
    if(num > 0) {
        numCount.style.color = 'var(--green-dark)'
    } else if(num == 0) {
        numCount.style.color = 'var(--gray-500)'
    }
})

// reset
reset.addEventListener('click', () => {
    num = 0
    numCount.innerText = 0
    if(num == 0) {
        numCount.style.color = 'var(--gray-500)'
    }
})

// decrease
decrease.addEventListener('click', () => {
    num--
    numCount.innerText = num
    if(num < 0) {
        numCount.style.color = 'var(--red-dark)'
    } else if(num == 0) {
        numCount.style.color = 'var(--gray-500)'
    }
})
