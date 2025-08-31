let firstcard = 11;
let secondcard = 11;
let sum = firstcard + secondcard
let hasBlackjack = false
let isAlive = true
// console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw another card?");
  
} else if (sum === 21) {
  console.log("Congrats, You have won");
  hasBlackjack = true
} else if (sum > 21) {
  console.log("You have lost");
  isAlive = false
}

// console.log(hasBlackjack);
console.log(isAlive);

