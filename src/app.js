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
//changeVisibility method is used to change the visibility of items in ingredients list and also to update the total price
function changeVisibility(ingredientClass,ingredientState,price){ 
  let priceElement=document.querySelector(".price-details")
  let totalPrice=Number(priceElement.innerHTML)
  let ingredient=document.querySelector(`.${ingredientClass}`)
  if(ingredientState){
    ingredient.style.display="block"
    priceElement.innerHTML=totalPrice+price
  }
  else{
    ingredient.style.display="none"
    priceElement.innerHTML=totalPrice-price
  }
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  let pattyButton=document.querySelector(".btn-patty")
  //you can also use getElementById
  state.Patty=!state.Patty;
 if (state.Patty) {
   patty.style.display = "inherit";
   pattyButton.classList.add("active")
 }
 else{
   patty.style.display = "none";
   pattyButton.classList.remove("active")
 }
 changeVisibility("Patty",state.Patty,ingredients.Patty)
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOMlet cheese=document.querySelector("#cheese")
  state.Cheese=!state.Cheese
  let cheese = document.querySelector("#cheese"); //cheese
  //you can also use getElementById
  let cheeseButton=document.querySelector(".btn-cheese")
 if (state.Cheese) {
   cheese.style.display = "inherit";
   cheeseButton.classList.add("active")
 }
 else {
   cheese.style.display = "none";
   cheeseButton.classList.remove("active")
 }
 
 changeVisibility("Cheese",state.Cheese,ingredients.Cheese)
 
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  state.Tomatoes=!state.Tomatoes
  let tomatoe=document.querySelector("#tomato")
  let tomatoButton=document.querySelector(".btn-tomatoes")
  if(state.Tomatoes){
    tomatoe.style.display="inherit";
    tomatoButton.classList.add("active")
 }
  else{
   tomatoe.style.display="none";
   tomatoButton.classList.remove("active")
  }
  changeVisibility("Tomato",state.Tomatoes,ingredients.Tomatoes)
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  state.Onions=!state.Onions;
  let onion=document.querySelector("#onion")
  let onionButton=document.querySelector(".btn-onions")
  if(state.Onions){
    onion.style.display="inherit"
    onionButton.classList.add("active")
  }
  else{
    onion.style.display="none"
    onionButton.classList.remove("active")
  }
  changeVisibility("Onion",state.Onions,ingredients.Onions)
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  state.Lettuce=!state.Lettuce
  let lettuce=document.querySelector("#lettuce")
  let lettuceButton=document.querySelector(".btn-lettuce")
  if(state.Lettuce){
    lettuce.style.display="inherit"
    lettuceButton.classList.add("active")
  }
  else{
    lettuce.style.display="none"
    lettuceButton.classList.remove("active")
  }
  changeVisibility("Lettuce",state.Lettuce,ingredients.Lettuce)
}

document.querySelector(".btn-patty").onclick = function () {
  //state.Patty = !state.Patty;
  renderPatty();
};

// Trial 2 - Setup event listener for the cheese button
var cheese=document.querySelector(".btn-cheese")
cheese.addEventListener("click",renderCheese)
// Trial 2 - Setup event listener for the tomatoes button
var tomato=document.querySelector(".btn-tomatoes")
tomato.addEventListener("click",renderTomatoes)

// Trial 2 - Setup event listener for the onion button
var onion=document.querySelector(".btn-onions")
onion.addEventListener("click",renderOnions)

// Trial 2 - Setup event listener for the lettuce button
var lettuce=document.querySelector(".btn-lettuce")
lettuce.addEventListener("click",renderLettuce)

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
