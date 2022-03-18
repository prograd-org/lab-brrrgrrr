// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;
var prc=160;
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
  let ch = document.getElementById("cheese");
  if(state.Cheese){
    ch.style.display = "inherit";
  }
  else {
    ch.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tm = document.getElementById("tomato");
  if(state.Tomatoes){
    tm.style.display = "inherit";
  }
  else {
    tm.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let on = document.getElementById("onion");
  if(state.Onions){
    on.style.display = "inherit";
  }
  else {
    on.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lt = document.getElementById("lettuce");
  if(state.Lettuce){
    lt.style.display = "inherit";
  }
  else {
    lt.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  if(state.Patty){
    prc+=80;
  }
  else {
    prc-=80;
  }

  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  if(state.Cheese){
    prc+=10;
  }
  else {
    prc-=10;
  }
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;

  if(state.Tomatoes){
      prc+=20;
    }
    else {
      prc-=20;
    }

  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;

  if(state.Onions){
    prc+=20;
  }
  else {
    prc-=20;
  }
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;

  if(state.Lettuce){
    prc+=20;
  }
  else {
    prc-=20;
  }

  renderAll();
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  var btn = document.getElementsByClassName("button");

  if(state.Patty){
    btn[0].className += " active";
  }
  else {
    btn[0].className = "button btn-patty";
  }

  if(state.Cheese){
    btn[1].className += " active";
  }
  else {
    btn[1].className = "button btn-cheese";
  }

  if(state.Tomatoes){
    btn[2].className += " active";
  }
  else {
    btn[2].className = "button btn-tomatoes";
  }

  if(state.Onions){
    btn[3].className += " active";
  }
  else {
    btn[3].className = "button btn-onions";
  }

  if(state.Lettuce){
    btn[4].className += " active";
  }
  else {
    btn[4].className = "button btn-lettuce";
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  var itm = document.getElementsByClassName("items");

  if(state.Patty){
    itm[0].innerHTML = "Patty";
  }
  else {
    itm[0].innerHTML = "No Patty";
  }

  if(state.Cheese){
    itm[1].innerHTML = "Cheese";
  }
  else {
    itm[1].innerHTML = "No Cheese";
  }

  if(state.Tomatoes){
    itm[2].innerHTML = "Tomatoes";
  }
  else {
    itm[2].innerHTML = "No Tomatoes";
  }

  if(state.Onions){
    itm[3].innerHTML = "Onions";
  }
  else {
    itm[3].innerHTML = "No Onions";
  }

  if(state.Lettuce){
    itm[4].innerHTML = "Lettuce";
  }
  else {
    itm[4].innerHTML = "No Lettuce";
  }

}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  document.getElementById("price-details").innerHTML="INR "+prc;
}
