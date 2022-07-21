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
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  if(state.Tomatoes){
    tomatoes.style.display = "inherit";
  }else{
    tomatoes.style.display = "none";
  }
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if(state.Onions){
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
}
// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
}
// Trial 2 - Setup event listener for the tomatoes button


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
}

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
}


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  for(key in state){
    if(state[key]){
      console.log(state[key]);
      document.querySelector(".btn-" + key.toLowerCase()).classList.add("active")
    }else{
      document.querySelector(".btn-" + key.toLowerCase()).classList.remove("active")
    }
  }
}
//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  let i = 0;
  let ingElems = document.querySelectorAll(".items");
  for(key in state){
    if(state[key]){
      ingElems[i++].style.display = "inherit";
    }else{
      ingElems[i++].style.display = "none";
    }
  }
}

function renderPrice(){
  let totalPrice = 20;
  for(key in state){
    if(state[key]){
      totalPrice+= ingredients[key];
    }
  }
  document.querySelector("body > footer > div.Rectangle3 > div > p.price-details").innerHTML = "INR " + totalPrice;
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
