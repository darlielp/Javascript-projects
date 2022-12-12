const filters = document.querySelector(".filters")
const searchInput = document.querySelector(".search-input")
const productsContainer = document.querySelector(".products")

import products from "./products.js"

let product = [...products]

function displayProducts() {
  if(product.length < 1) {
    productsContainer.innerHTML = 
      `<h3 class="notFound">Sorry, no products matched your search</h3>`
      return
  }

  productsContainer.innerHTML = product.map(({id, title, img, price}) => {
    return `<div class="product" data-id="${id}">
    <img src="${img}" alt="${title}" class="product-img">
    <h5 class="product-name">${title}</h5>
    <p class="product-price">&dollar; ${price}</p>
  </div>`
  }).join('')
}

displayProducts()

searchInput.addEventListener("keyup", () => {
  const inputValue = searchInput.value
  product = products.filter
  ((game) => {
    return game.title.toLowerCase().includes(inputValue)
  })
  displayProducts()
})

function displayButons() {
  const buttons = ['all', ...new Set (products.map((game) => game.platform))]
  filters.innerHTML = buttons.map((platform) => {
    return `<button class="btn ${platform}" data-id="${platform}">${platform}</button>`
  }).join('')
}

displayButons()

filters.addEventListener("click", e => {
  const el = e.target
  if(el.classList.contains('btn')) {
    if(el.dataset.id === 'all') {
      product = [...products]
    } else {
      product = products.filter((game) => {
        return game.platform === el.dataset.id
      })
    }
    searchInput.value = ''
    displayProducts()
  }
})