const inputTask = document.querySelector(".formInput")
const alert = document.querySelector(".alert")
const tasksCont = document.querySelector(".tasks-container")
const taskDesc = document.querySelector(".taskDesc")
const checkbox = document.querySelector(".checkbox")
const checkboxVerify = document.querySelector(".checkboxValue")

const addBtn = document.querySelector(".addItem")
const clearBtn = document.querySelector(".reset")

let editElement
let editFlag = false
let editID = ""
let check = false

addBtn.addEventListener("click", addTask)
clearBtn.addEventListener("click", clearTask)

window.addEventListener("DOMContentLoaded", setupItems)

// Add a new Task

function addTask(e) {
  e.preventDefault()
  const value = inputTask.value
  const id = new Date().getTime().toString()
  check = checkboxVerify.checked

  if(value && !editFlag) {
    createListItem(id, value)
    showAlert("item added to the list", "success")
    tasksCont.classList.add("show-tasks")
    addToLocalStore(id, value)
    setBackToDefault()
  } else if(value && editFlag) {
    editElement.innerHTML = value
    showAlert("value changed", "success")
    editLocalStorage(editID, value, check)
    setBackToDefault()
  } else {
    showAlert("Please, enter a value", "error")
  }
}

// Show Tasks Alert

function showAlert(text, action) {
  alert.textContent = text
  alert.classList.add(action)

  setTimeout(() => {
    alert.textContent = ""
    alert.classList.remove(action)
  }, 1300)
}

// Edit Tasks

function editTask(e) {
  const element = e.currentTarget.parentElement.parentElement
  editElement = e.currentTarget.parentElement.previousElementSibling
  inputTask.value = editElement.innerHTML
  editFlag = true
  editID = element.dataset.id
  addBtn.textContent = "edit"
  editTasksBtns()
  checkboxVerify.addEventListener("click", () => {
    if(checkboxVerify.checked) {
      editElement.style.textDecoration = "line-through"
     } else {
      editElement.style.textDecoration = "none"
     }
  })
}

// Delete Tasks

function deleteTask(e) {
  const element = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  tasksCont.firstElementChild.removeChild(element)
  const taskList = document.querySelectorAll(".taskDesc")
  if(taskList.length === 0) {
    tasksCont.classList.remove("show-tasks")
    clearBtn.classList.remove("show-reset")
  }
  checkbox.classList.remove("show-checkbox")
  showAlert("item removed", "error")
  setBackToDefault()
  removeFromLocalStorage(id)
}

// Clear All Tasks

function clearTask() {
  const taskList = document.querySelectorAll(".taskDesc")
  if(taskList.length > 0) {
    taskList.forEach((task) => {
      tasksCont.firstElementChild.removeChild(task)
    })
  }
  tasksCont.classList.remove("show-tasks")
  clearBtn.classList.remove("show-reset")
  showAlert("empty list", "error")
  localStorage.removeItem("list")
}

// LocalStorage Tasks

function setBackToDefault() {
  inputTask.value = ""
  editFlag = false
  editID = ""
  addBtn.textContent = "add"
  check = false
}

function addToLocalStore(id, value) {
  const task = {id, value}
  let tasks = getLocalStorage()
  tasks.push(task)
  localStorage.setItem("list", JSON.stringify(tasks))
}

function removeFromLocalStorage(id) {
  let tasks = getLocalStorage()
  tasks = tasks.filter(function(task) {
    if(task.id !== id) {
      return task
    }
  })
  localStorage.setItem("list", JSON.stringify(tasks))
}

function editLocalStorage(id, value, check) {
  let tasks = getLocalStorage()
  tasks = tasks.map((task) => {
    if(task.id === id) {
      task.value = value
      task.check = check
    }
    return task
  })
  localStorage.setItem("list", JSON.stringify(tasks))
}

function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
}

function setupItems() {
  let tasks = getLocalStorage()
  if(tasks.length > 0) {
    tasks.forEach(function(task) {
      createListItem(task.id, task.value, task.check)
    })
    tasksCont.classList.add("show-tasks")
  } 
}

// Tasks Template

function createListItem(id, value, check) {
  const element = document.createElement("li")
  element.classList.add("taskDesc")
  clearBtn.classList.add("show-reset")
  const attr = document.createAttribute("data-id")
  attr.value = id
  element.setAttributeNode(attr)
  if(check) {
    element.style.textDecoration = "line-through"
  } else {
    element.style.textDecoration = "none"
  }
  element.innerHTML = 
  `<span>${value}</span>
  <div class="icons">
  <button class="fas fa-edit editBtn"></button>
  <button class="fas fa-trash deleteBtn"></button>
  </div>`

  const editBtn = element.querySelector(".fa-edit")
  const deleteBtn = element.querySelector(".fa-trash")

  deleteBtn.addEventListener("click", deleteTask)
  editBtn.addEventListener("click", editTask)

  tasksCont.firstElementChild.appendChild(element)
}

function editTasksBtns() {
  clearBtn.classList.remove("show-reset")
  checkbox.classList.add("show-checkbox") 
  if(addBtn.textContent.contains = "edit") {
    addBtn.addEventListener("click", () => {
      checkbox.classList.remove("show-checkbox")
      clearBtn.classList.add("show-reset")
    })
  } 
}

