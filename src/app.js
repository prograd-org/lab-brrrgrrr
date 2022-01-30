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
  let cheese = document.getElementById("cheese");

  if (state.Cheese == true) {
    cheese.style.display = "inherit";
  }
   else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tom = document.getElementById("tomato");

  if (state.Tomatoes == true){
    tom.style.display = "inherit";
  }
  else{
    tom.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let oni = document.getElementById("onion");

  if (state.Onions == true) {
    oni.style.display = "inherit";
  }
   else {
    oni.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lat = document.getElementById("lettuce");

  if (state.Lettuce == true) {
    lat.style.display = "inherit";
  }
   else {
    lat.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  list_1();
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  list_2();
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  list_3();
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  list_4();
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  list_5();
  renderAll();
  
};

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function list_1(){
  if(!state.Patty){
  document.getElementById("1").style.display='none';
  total = total-ingredients.Patty;
  }
  else{
  document.getElementById("1").style.display='inherit';
  total = total+ingredients.Patty;
  }
  calculate_price();
}
function list_2(){
  if(!state.Cheese){
  document.getElementById("2").style.display='none';
  total = total-ingredients.Cheese;
  }
  else{
  document.getElementById("2").style.display='inherit';
  total = total+ingredients.Cheese;
  }
  calculate_price();
}
function list_3(){
  if(!state.Tomatoes){
  document.getElementById("3").style.display='none';
  total = total-ingredients.Tomatoes;
  }
  else{
  document.getElementById("3").style.display='inherit';
  total = total+ingredients.Tomatoes;
  }
  calculate_price();
}
function list_4(){
  if(!state.Onions){
  document.getElementById("4").style.display='none';
  total = total-ingredients.Onions;
  }
  else{
  document.getElementById("4").style.display='inherit';
  total = total+ingredients.Onions;
  }
  calculate_price();
}

function list_5(){
  if(!state.Lettuce){
  document.getElementById("5").style.display='none';
  total = total-ingredients.Lettuce;
  }
  else{
  document.getElementById("5").style.display='inherit';
  total = total+ingredients.Lettuce;
  }
  calculate_price();
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function calculate_price(){
  var finalPrice = total+wholeWheatBun;
  document.getElementById("INR").innerHTML='INR '+finalPrice;
  
}
