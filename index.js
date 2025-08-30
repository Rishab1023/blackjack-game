let firstcard = 11;
let secondcard = 11;
let sum = firstcard + secondcard

console.log(sum);

if (sum < 21) {
  console.log("Do you want to draw another card?");
  
} else if (sum === 21) {
  console.log("Congrats, You have won");
  
} else if (sum > 21) {
  console.log("You have lost");
  
}

