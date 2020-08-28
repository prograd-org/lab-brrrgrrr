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
  // renderButtons();
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
  let cheese = document.getElementById("cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById("tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById("onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById("lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  // will the button color based on state ie selected by user or not
  changeActive("btn-patty", state.Patty);
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  // will the button color based on state ie selected by user or not
  changeActive("btn-cheese", state.Cheese);
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  // will the button color based on state ie selected by user or not
  changeActive("btn-tomatoes", state.Tomatoes);
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  // will the button color based on state ie selected by user or not
  changeActive("btn-onions", state.Onions);
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  // will the button color based on state ie selected by user or not
  changeActive("btn-lettuce", state.Lettuce);
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
let changeActive = (name, activeState) => {
  // function will take class of the button pressed and will check the state of that
  //ingredient if true then background will chnaged by removing/adding active class
  let displayProperty = document.querySelector(`.${name}`);
  if (activeState)
    displayProperty.setAttribute("class", `button ${name} active`);
  else displayProperty.setAttribute("class", `button ${name}`);
};

//Challenge 2 - Render only the items selected in the ingredients board based on the state
let renderIngredientsBoard = () => {
  // will only render those ingredients name whose state is active
  for (const item in state) {
    let ingredient = document.getElementsByClassName("items");
    for (const element of ingredient) {
      if (item == element.innerHTML) {
        if (state[item]) element.style.display = "inherit";
        else element.style.display = "none";
      }
    }
  }
};

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

const renderPrice = () => {
  let totalPrice = 0;

  // calculating the price by checking if the ingredient is selected by customer using the state objet
  for (const item in state) {
    if (state[item]) {
      totalPrice += ingredients[`${item}`];
    }
  }

  document.querySelector(".price-details").innerHTML = `INR {totalPrice}`;
  
};
