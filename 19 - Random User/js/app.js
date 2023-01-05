import getElement from "../utils/getElement.js";
import displayUser from "../utils/displayUser.js";
import getUser from "../utils/fetchUser.js";

const randomUser = getElement(".btn")

const showUser = async () => {
  // fetch user from api and display
  const person = await getUser()
  displayUser(person)
}

window.addEventListener("DOMContentLoaded", showUser)
randomUser.addEventListener("click", showUser)

