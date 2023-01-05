function getElement (selector) {
  const el = document.querySelector(selector)
  if(el) {
    return el
  } else {
    throw new Error(`Please check "${selector}" selector, no such element exists.`)
  }
}

export default getElement