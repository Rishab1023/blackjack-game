// Game elements
let firstcard = 1;
let secondcard = 10;
let cards = [firstcard, secondcard]; // array ordered list of items
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
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
  let thirdcard = 10
  sum = sum + thirdcard;
  cards.push(thirdcard);
  renderGame();
}
