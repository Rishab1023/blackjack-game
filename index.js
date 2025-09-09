// Game elements
let firstcard = 1;
let secondcard = 10;
let cards = [firstcard, secondcard]; // array ordered list of items
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let random_number = Math.random();
console.log(random_number);
// Game logic
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// start button
function startGame() {
  renderGame();
}
function renderGame() {
  console.log(firstcard, "", secondcard);
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "sum" + " " + sum;
  if (sum < 21) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Congrats, You have won";
    hasBlackjack = true;
  } else if (sum > 21) {
    message = "You have lost";
    isAlive = false;
  }
  console.log(message);
  messageEl.textContent = message;
}
function newcard() {
  console.log("Drawing a new card from the deck");
  let thirdcard = 10;
  sum = sum + thirdcard;
  cards.push(thirdcard);
  renderGame();
}

function random() {
  if(random<=0.1){
  thirdcard = 1
  }
  if(random<=0.2 and random>0.1){
  thirdcard = 2 
  }
  if(random<=0.3 and random>0.2){
  thirdcard = 3 
  }
  if(random<=0.4 and random>0.3){
  thirdcard = 4 
  }
  if(random<=0.5 and random>0.4){
  thirdcard = 5 
  }
  if(random<=0.6 and random>0.5){
  thirdcard = 6 
  }
  if(random<=0.7 and random>0.6){
  thirdcard = 7 
  }
  if(random<=0.8 and random>0.7){
  thirdcard = 8
  }
  if(random<=0.9 and random>0.8){
  thirdcard = 9 
  }
  else{
  thirdcard = 10
  }
}
