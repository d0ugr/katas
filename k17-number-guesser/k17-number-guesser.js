let prompt = require("prompt-sync")();

const minRandom = 1;
const maxRandom = 100;

let secretNumber     = Math.round(Math.random() * (maxRandom - minRandom)) + minRandom;
let guess            = "";
let previousAttempts = [];
let attempts         = 0;

//console.log(secretNumber);
while (guess !== secretNumber) {
  console.log("Guess a number:");
  guess = prompt("> ").toLowerCase();
  if (guess !== "quit") {
    guess = parseInt(guess);
    if (!isNaN(guess)) {
      if (previousAttempts.indexOf(guess) === -1) {
        previousAttempts.push(guess);
        attempts++;
        if (guess === secretNumber) {
          console.log("You got it! You took " + attempts + " attempts!");
        }
        else if (guess < secretNumber) {
          console.log("Too Low!");
        }
        else {
          console.log("Too High!");
        }
      }
      else {
        console.log("Already Guessed!");
      }
    }
    else {
      console.log("Not a number! Try again!");
    }
  }
  else {
    break;
  }
}
