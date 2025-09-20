// Game elements
let cards = []; // array ordered list of items
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
// Game logic
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
console.log(cards);


function getRandomCard() {
  let RandomNumber = Math.floor(Math.random() * 13) + 1
  if (RandomNumber > 10) {
    return 10
  } else if (RandomNumber === 1) {
    return 11
  } else {
    return RandomNumber
  }
}

// start button
function startGame() {

  if (isAlive === false) {
    isAlive = true
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    renderGame();
  }
}

// this function renders the game
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "sum : " + sum; // renders the sum of the cards on the page
  // logic for the message that is rendered on the page
  if (sum < 21) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Congrats, You have won";
    hasBlackjack = true;
    isAlive = false
  } else if (sum > 21) {
    message = "You have lost";
    isAlive = false;
  }
  console.log(message);
  messageEl.textContent = message; // this renders the message according the conditions
}
// this function produces a new card aand pushes it to the cards array
function newcard() {
  if (isAlive === true && sum < 21) {
    let thirdcard = getRandomCard();
    sum = sum + thirdcard;
    cards.push(thirdcard);
    renderGame();
  }

}
