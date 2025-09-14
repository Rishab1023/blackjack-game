// Game elements
let firstcard = getRandomCard();
let secondcard = getRandomCard();
let cards = [firstcard, secondcard]; // array ordered list of items
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
// Game logic
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard() {
  return 5;
}

// start button
function startGame() {
  renderGame();
}
function renderGame() {
  console.log(firstcard, "", secondcard);
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }
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
  let thirdcard = getRandomCard();
  sum = sum + thirdcard;
  cards.push(thirdcard);
  renderGame();
}
