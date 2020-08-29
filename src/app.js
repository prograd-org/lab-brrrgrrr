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
  Lettuce: 20,
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM

  let cheese = document.querySelector("#cheese");

  if (state.cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM

  let tomato = document.querySelector("#tomato");

  if (state.tomato) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM

  let onions = document.querySelector("#onions");

  if (state.onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");

  if (state.lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}



document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.cheese = !state.cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes ").onclick = function () {
  state.tomato = !state.tomato;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector("btn-lettuce").onclick = function () {
  state.lettuce = !state.lettuce;
  renderAll();
};
// Trial 2 - Setup event listener for the onions button

document.querySelector("btn-onions").onclick = function () {
  state.onions = !state.onions;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state

function renderBtn(key, value) {
  var i = document.querySelector(".btn-" + key);
  if (value == true) {
    i.classList.toggle("active");
  } else {
    i.classList.remove("active");
  }
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderBoard(key, value) {
  var i = document.querySelector("." + key);
  if (value == true) {
    i.style.display = "block";
  } else {
    i.style.display = "none";
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
