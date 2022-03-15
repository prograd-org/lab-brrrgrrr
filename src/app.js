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
  let Cheese = document.querySelector("#cheese");
  if(state.Cheese) {
    Cheese.style.display = "inherit";
  }else{
    Cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let Tomato = document.querySelector("#tomato");
  if(state.Tomatoes) {
    Tomato.style.display = "inherit";
  }else {
    Tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if(state.Onions) {
    onions.style.display = "inherit";
  }else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuces = document.querySelector("#lettuce");
  if(state.Lettuce) {
    lettuces.style.display = "inherit";
  }else {
    lettuces.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {

  if(state.Patty)
    document.querySelector(".btn-patty").classList.add("active");
  else
    document.querySelector(".btn-patty").classList.remove("active");

  if(state.Tomatoes)
    document.querySelector(".btn-tomatoes").classList.add("active");
  else
    document.querySelector(".btn-tomatoes").classList.remove("active");

  if(state.Cheese)
    document.querySelector(".btn-cheese").classList.add("active");
  else
    document.querySelector(".btn-cheese").classList.remove("active");

  if(state.Onions)
    document.querySelector(".btn-onions").classList.add("active");
  else
    document.querySelector(".btn-onions").classList.remove("active");
  
  if(state.Lettuce)
    document.querySelector(".btn-lettuce").classList.add("active");
  else
    document.querySelector(".btn-lettuce").classList.remove("active");




}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  if(!state.Patty)
    document.getElementsByClassName("items")[0].innerHTML = " ";
  else
  document.getElementsByClassName("items")[0].innerHTML = "Patty";

  if(!state.Cheese)
    document.getElementsByClassName("items")[1].innerHTML = " ";
  else
  document.getElementsByClassName("items")[1].innerHTML = "Cheese";

  if(!state.Tomatoes)
    document.getElementsByClassName("items")[2].innerHTML = " ";
  else
  document.getElementsByClassName("items")[2].innerHTML = "Tomatoes";
  
  if(!state.Onions)
    document.getElementsByClassName("items")[3].innerHTML = " ";
  else
  document.getElementsByClassName("items")[3].innerHTML = "Onions";

  if(!state.Lettuce)
    document.getElementsByClassName("items")[4].innerHTML = " ";
  else
    document.getElementsByClassName("items")[4].innerHTML = "Lettuce";
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function renderPrice() {
  var price = 20;
  if(state.Patty)
    price = ingredients.Patty + price;
  if(state.Cheese)
    price = ingredients.Cheese + price;
  if(state.Tomatoes)
    price = ingredients.Tomatoes + price;
  if(state.Onions)
    price = ingredients.Onions + price;
  if(state.Lettuce)
    price = ingredients.Lettuce + price;  

  document.querySelector(".price-details").innerHTML = "INR " + price;

}