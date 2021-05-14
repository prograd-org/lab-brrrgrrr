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
var total=20;

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  // renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  let pattybtn=document.querySelector(".btn-patty");
   let pattyb=document.getElementById('pattyy').contentDocument.getElementById('pattyt');
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "block";
    pattybtn.style.backgroundColor='white';
    pattyb.style.display="block"
    total+=ingredients.Patty;
    document.querySelector(".price-details").innerHTML="INR "+total;
  } else {
    patty.style.display = "none";
    pattybtn.style.backgroundColor='#ffd058';
    pattyb.style.display="none"
    total-=ingredients.Patty;
    document.querySelector(".price-details").innerHTML="INR "+total;
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  let cheesebtn=document.querySelector(".btn-cheese");
  let cheeseb=document.getElementById('pattyy').contentDocument.getElementById('cheeset');

  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "block";
    cheesebtn.style.backgroundColor='white';
    cheeseb.style.display="block"
    total+=ingredients.Cheese;
    document.querySelector(".price-details").innerHTML="INR "+total;
  } else {
    cheese.style.display = "none";
    cheesebtn.style.backgroundColor='#ffd058';
    cheeseb.style.display="none"
    total-=ingredients.Cheese;
    document.querySelector(".price-details").innerHTML="INR "+total;
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  let tomatoesbtn=document.querySelector(".btn-tomatoes");
  let tomatob=document.getElementById('pattyy').contentDocument.getElementById('tomatot');

  //you can also use getElementById
  if (state.Tomatoes) {
    tomatoes.style.display = "block";
    tomatoesbtn.style.backgroundColor='white';
    tomatob.style.display="block"
    total+=ingredients.Tomatoes;
    document.querySelector(".price-details").innerHTML="INR "+total;
  } else {
    tomatoes.style.display = "none";
    tomatoesbtn.style.backgroundColor='#ffd058';
    tomatob.style.display="none"
    total-=ingredients.Tomatoes;
    document.querySelector(".price-details").innerHTML="INR "+total;
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  let onionsbtn=document.querySelector(".btn-onions");
  let onionb=document.getElementById('pattyy').contentDocument.getElementById('oniont');

  //you can also use getElementById
  if (state.Onions) {
    onions.style.display = "block";
    onionsbtn.style.backgroundColor='white';
    onionb.style.display="block"
    total+=ingredients.Onions;
    document.querySelector(".price-details").innerHTML="INR "+total;
  } else {
    onions.style.display = "none";
    onionsbtn.style.backgroundColor='#ffd058';
    onionb.style.display="none"
    total-=ingredients.Onions;
    document.querySelector(".price-details").innerHTML="INR "+total;
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  let lettucebtn=document.querySelector(".btn-lettuce");
  let lettuceb=document.getElementById('pattyy').contentDocument.getElementById('lettucet');

  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "block";
    lettucebtn.style.backgroundColor='white';
    lettuceb.style.display="block"
    total+=ingredients.Lettuce;
    document.querySelector(".price-details").innerHTML="INR "+total;
  } else {
    lettuce.style.display = "none";
    lettucebtn.style.backgroundColor='#ffd058';
    lettuceb.style.display="none"
    total-=ingredients.Lettuce;
    document.querySelector(".price-details").innerHTML="INR "+total;
  }
}

document.querySelector(".btn-patty").onclick = function () {
  renderPatty();
  state.Patty = !state.Patty;
  // renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  renderCheese();
  state.Cheese = !state.Cheese;
  
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  renderTomatoes();
  state.Tomatoes = !state.Tomatoes;
  
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  renderOnions();
  state.Onions = !state.Onions;
  
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  renderLettuce();
  state.Lettuce = !state.Lettuce;
  
};

//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
document.querySelector(".Rectangle5").onclick = function () {
  let totalb=document.getElementById('pattyy').contentDocument.getElementById('totalt');
      totalb.innerHTML=`Total ………. ${total}`;
      document.querySelector(".price-details").innerHTML=total;}
//price based on ingredients
