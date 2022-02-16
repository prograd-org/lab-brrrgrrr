// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
const wholeWheatBun = 10

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20,
}

//Current state of the ingredients in the burger
const state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
}

// This function renders the entire screen everytime the state changes accordingly
const renderAll = () => {
  renderPatty()
  renderCheese()
  renderTomatoes()
  renderOnions()
  renderLettuce()
  renderIngredientsBoard()
  renderPrice()
}

const renderPatty = () => {
  const patty = document.querySelector("#patty")
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit"
  } else {
    patty.style.display = "none"
  }
}

const renderCheese = () => {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  const cheese = document.querySelector("#cheese")
  if (state.Cheese) {
    cheese.style.display = "inherit"
  } else {
    cheese.style.display = "none"
  }
}

const renderTomatoes = () => {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  const tomatoes = document.querySelector("#tomato")
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit"
  } else {
    tomatoes.style.display = "none"
  }
}

const renderOnions = () => {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  const onions = document.querySelector("#onion")
  if (state.Onions) {
    onions.style.display = "inherit"
  } else {
    onions.style.display = "none"
  }
}

const renderLettuce = () => {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  const lettuce = document.querySelector("#lettuce")
  if (state.Lettuce) {
    lettuce.style.display = "inherit"
  } else {
    lettuce.style.display = "none"
  }
}

document.querySelector(".btn-patty").onclick = () => {
  state.Patty = !state.Patty
  btnActive("btn-patty", state.Patty)
  renderAll()
}

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = () => {
  state.Cheese = !state.Cheese
  btnActive("btn-cheese", state.Cheese)
  renderAll()
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = () => {
  state.Tomatoes = !state.Tomatoes
  btnActive("btn-tomatoes", state.Tomatoes)
  renderAll()
}

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = () => {
  state.Onions = !state.Onions
  btnActive("btn-onions", state.Onions)
  renderAll()
}
// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = () => {
  state.Lettuce = !state.Lettuce
  btnActive("btn-lettuce", state.Lettuce)
  renderAll()
}
//Challenge 1 - Add/Remove the class active to the buttons based on state
const btnActive = (name, activeState) => {
  let displayProperty = document.querySelector(`.${name}`)
  if (activeState)
    displayProperty.setAttribute("class", `button ${name} active`)
  else displayProperty.setAttribute("class", `button ${name}`)
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
const renderIngredientsBoard = () => {
  for (const item in state) {
    const ingredient = document.getElementsByClassName("items")
    for (const element of ingredient) {
      if (item == element.innerHTML) {
        if (state[item]) element.style.display = "inherit"
        else element.style.display = "none"
      }
    }
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
const renderPrice = () => {
  let total = 20
  for (const item in state) {
    if (state[item]) {
      total += ingredients[`${item}`]
    }
  }

  document.querySelector(".price-details").innerHTML = `INR ${total}`
}
