// check if person is old enough to enter the nightclub (21)
// log a suitable message to the console in both cases

// let age = 20

// if less than 21 -> "you cannot enter the club! "
// else            -> "Welcome"

// if (age < 21) {
//   console.log("you cannot enter the club!");

// } else {
//   console.log("Welcome");

// }

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 101

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if (age < 100) {
//   console.log("Not elegible");

// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!");

// } else {
//   console.log("Not elegible, you have already gotten one");

// }

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

// //Arrays

// //create an array that lists your i.e. education, experience, lisences, skills or similar
// // the items should be strings

// let Myprofile = [
//   "I am currently studying computer science engineering, i am a first year student",
//   "I am a begineer javascript developer",
//   "I currently dont have any lisences",
//   "I know basics of web development"
// ]

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// // Make the following appear in the console:
// // Frontend developer at Xeneta
// // People counter for Norstat
// // CEO at Scrimba

// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);

// Array - ordered list of items - coposite / complex data type
// let personal_info = [
//   "Rishab",17,true
// ]
// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let cards = [1,4]

// cards.push(6)

// console.log(cards);

// here cards are objects, push is method

// Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// // messages.push(newMessage)

// // console.log(messages);

// messages.pop();

// console.log(messages);

// for loops
// Count to ten!

// example

// Start          finish      step size
// for (let count = 10; count < 21; count++) {
//   console.log(count);
// }
// let random = Math.random();

// console.log(random);


// create a loop that counts from 10 to 100 in steps of 10
// console log the numbers


// for (let count = 10; count < 101; count += 10) {
//   console.log(count);
// }

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear",
//     "🙌",
//     "fdfd",
//     "fdfd",
//     "fdfd",
//     "fdfd",
// ]

// for(let i = 0; i < messages.length; i += 1) {
//   console.log(messages[i]);

// }

// let cards = [7,4,5,8,4,63,6,3,5,7,9,2,5];

// create a for loop that logs out all the cards in the array
// use cards.length to specify how long the loop should run

// for (let i = 0; i < cards.length; i++) {
//    console.log(cards[i]);

// }

// let player1Time = 102
// let player2Time = 107

// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

// function TotalRaceTime() {
//   return player1Time + player2Time;
// }

// let totalRaceTime = TotalRaceTime()
// console.log(totalRaceTime);

// let randomNumber = Math.random() * 6

// console.log(randomNumber);

/*

What does Math.random() do?

Answer = It random a random number between 0 and 1 not including 1


*/


/*

Q. In which range will our random number be?

from : 0
to : 5.9999

*/


// floored numbers

// let floorednumber = Math.floor(4.34374343)
// console.log(floorednumber);



// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber);

/*

write down all the values randomNumber can hold now!

Ans = 0,1,2,3,4,5

*/
let btn = document.querySelector("#result")

function rollDice(){
  let randomNumber = Math.floor(Math.random() * 6) + 1
  // return randomNumber
  btn.textContent = "Result :-"  + randomNumber;
}

let Dice = rollDice()

console.log(Dice);

