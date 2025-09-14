let sentence = ["hello","My","name","is","Rishab"]
let greetingEl = document.querySelector("#greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
    // if u conconate a string with space then the space is applied to the whole sentence without using the space in the array
}

