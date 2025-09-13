// Game elements
let firstcard = 1;
let secondcard = 10;
let cards = [firstcard, secondcard]; // array ordered list of items
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
<<<<<<< HEAD
=======
let random_card = Math.random();
console.log(random_card);
>>>>>>> parent of 7d50b18 (Refactor random number generation and add random card selection logic)
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
  let random_number = Math.random();
  console.log(random_number);
  let thirdcard = ""
  if (random_number <= 0.10) {
    thirdcard = 1;
    console.log(thirdcard);
  }
  if (random_number <= 0.20 && random_number > 0.10) {
    thirdcard = 2;
    console.log(thirdcard);
  }
  if (random_number <= 0.30 && random_number > 0.20) {
    thirdcard = 3;
    console.log(thirdcard);
  }
  if (random_number <= 0.40 && random_number > 0.30) {
    thirdcard = 4;
    console.log(thirdcard);
  }
  if (random_number <= 0.50 && random_number > 0.40) {
    thirdcard = 5;
    console.log(thirdcard);
  }
  if (random_number <= 0.60 && random_number > 0.50) {
    thirdcard = 6;
    console.log(thirdcard);
  }
  if (random_number <= 0.70 && random_number > 0.60) {
    thirdcard = 7;
    console.log(thirdcard);
  }
  if (random_number <= 0.80 && random_number > 0.70) {
    thirdcard = 8;
    console.log(thirdcard);
  }
  if (random_number <= 0.90 && random_number > 0.80) {
    thirdcard = 9;
    console.log(thirdcard);
  }
  if(random_number > 0.90) {
    thirdcard = 10;
    console.log(thirdcard);
  }
  console.log("Drawing a new card from the deck");
  console.log(thirdcard);
  
  sum = sum + thirdcard;
  cards.push(thirdcard);
  renderGame();
}
