var Word = require("./word.js");
var prompt = require("prompt");

prompt.start();


var = game {
  this.wordBank = [number, guess, remember, forget];
  this.guessesRemaining = 10;
  this.currentWrd = null;
  this.startGame = function(wrd) {
    var startWord = this.wordBank[Math.floor(Math.random) * this.wordBank.length];
    this.currentWrd = new Word(startWord);
    this.currentWrd.getLets();
    keepPromptingUser();
  }
  keepPromptingUser() = function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result){
      console.log("The Letter or space you guessed is " + result.guessLetter);
    });
    var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter)
    if (findHowManyOfUserGuess === 0){
      console.log("You guessed wrong!");
      guessesRemaining -= 1;
    } else {
      console.log("You guessed right!")
      if (this.currentWrd.didWeFindTheWord() === true) {
        console.log("You won!")
        return 1;
      }
    }
  }
}