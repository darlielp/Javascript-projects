const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec suscipit sapien. Quisque sed dolor consequat, imperdiet nisi id, vehicula enim.", "Donec euismod felis elit, ut pellentesque nisi pretium ut. Nam id egestas lacus.", "Morbi tristique in felis vel dignissim. In et dictum justo. In sed est ut nisl mattis venenatis. Nam pretium turpis lectus, ut iaculis neque dictum malesuada. Praesent varius metus in ante eleifend, in rutrum orci blandit. Vestibulum vel convallis nulla, non tempus augue.", "Donec iaculis auctor dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi rutrum dui at posuere volutpat. Cras quis pellentesque mauris. Nam at odio sed mi dignissim feugiat. Cras tortor elit, dapibus ac nunc et, condimentum condimentum ipsum. Nullam vehicula blandit pharetra. Nunc eu bibendum lectus.", "Nullam sagittis tristique arcu semper viverra. Nulla ac pulvinar nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in nulla lorem. Fusce at ex ac ante sodales tempor.", "Proin vel nisi sit amet metus pellentesque ultricies. Pellentesque pulvinar erat sem, et semper justo venenatis at. Nam vitae varius lacus.", "Aliquam iaculis libero id tellus volutpat tincidunt. Curabitur placerat luctus pulvinar.", "Pellentesque vel nunc laoreet ex luctus ullamcorper at eget lorem. Duis imperdiet lectus in laoreet aliquet. Mauris fringilla tristique sem, quis iaculis libero dignissim ac. Pellentesque imperdiet diam non enim tempor, non vehicula erat aliquet. Suspendisse id nunc sed libero tristique egestas vitae in odio. Fusce vel ullamcorper libero, et placerat mi.", "Mauris tristique lorem nec sagittis faucibus. Pellentesque porta ex nec mi pretium placerat. In vitae erat et nibh viverra iaculis. Morbi euismod erat ipsum, at dictum erat consectetur in. Praesent et mi ante.", "Suspendisse a porttitor lorem. Curabitur arcu ante, dignissim at nisl non, tristique varius risus. Praesent dapibus erat eu sapien iaculis dapibus. Phasellus rhoncus blandit porta."]

const generate = document.querySelector(".btn")
const loremText = document.querySelector(".lorem-text")
const inputRange = document.querySelector(".inputRange")
const counter = document.querySelector(".counter")

inputRange.value = 0

inputRange.addEventListener("input", () => {
  counter.textContent = inputRange.value
})

generate.addEventListener("click", (e) => {
  e.preventDefault()
  // convert string to number and get the value
  const value = parseInt(inputRange.value)
  
  if(value > 0 || value <= 10) {
    // slice the array from 0 to range value and run a loop into array
    const arrText = text.slice(0, value)
    loremText.innerHTML = arrText.map((lorem) => {
      return `<p>${lorem}</p>`
    }).join('')
  }
})