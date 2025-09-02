// Game elements
let firstcard = 10;
let secondcard = 11;
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

// Game logic
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// start button
function startGame() {
  console.log(firstcard, "" ,secondcard);
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
messageEl.innerText = message;
sumEl.innerText += sum;
cardsEl.textContent = "Cards: " + firstcard + " " + secondcard;
}

function newcard() {
  console.log("Drawing a new card from the deck");
  
}
