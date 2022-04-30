// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
}
let items = document.querySelectorAll(".items")
let price = document.querySelector(".price-details").innerHTML
let { 0: inr, 1: cost } = price.split(" ")

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    items[0].innerHTML = "Patty"
  } else {
    patty.style.display = "none";
    items[0].innerHTML = ""

  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese")
  if (state.Cheese) {
    cheese.style.display = "inherit"
    items[1].innerHTML = "Cheese"
  } else {
    cheese.style.display = "none"
    items[1].innerHTML = ""
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato")
  if (state.Tomatoes) {
    tomato.style.display = "inherit"
    items[2].innerHTML = "Tomatoes"
  } else {
    tomato.style.display = "none"
    items[2].innerHTML = ""
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion")
  if (state.Onions) {
    onion.style.display = "inherit"
    items[3].innerHTML = "Onions"
  } else {
    onion.style.display = "none"
    items[3].innerHTML = ""
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce")
  if (state.Lettuce) {
    lettuce.style.display = "inherit"
    items[4].innerHTML = "Lettuce"
  } else {
    lettuce.style.display = "none"
    items[4].innerHTML = ""
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  if (state.Patty) {
    cost = Number.parseInt(cost) + ingredients.Patty
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  } else {
    cost = Number.parseInt(cost) - ingredients.Patty
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  }
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  console.log(state.Cheese)
  if (state.Cheese) {
    cost = Number.parseInt(cost) + ingredients.Cheese
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  } else {
    cost = Number.parseInt(cost) - ingredients.Cheese
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  }
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  if (state.Tomatoes) {
    cost = Number.parseInt(cost) + ingredients.Tomatoes
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  } else {
    cost = Number.parseInt(cost) - ingredients.Tomatoes
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  }
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  if (state.Onions) {
    cost = Number.parseInt(cost) + ingredients.Onions
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  } else {
    cost = Number.parseInt(cost) - ingredients.Onions
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  }
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  if (state.Lettuce) {
    cost = Number.parseInt(cost) + ingredients.Lettuce
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  } else {
    cost = Number.parseInt(cost) - ingredients.Lettuce
    document.querySelector(".price-details").innerHTML = inr + " " + cost
  }
  renderAll();
};