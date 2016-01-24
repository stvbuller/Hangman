var Word = require("./word.js");
var prompt = require("prompt");

prompt.start();

debugger
var game = function() {
  this.wordBank = ["number", "guess", "remember", "forget"];
  this.guessesRemaining = 10;
  this.currentWrd = null;
  this.startGame = function(wrd) {
    var startWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    this.currentWrd = new Word(startWord);
    this.currentWrd.getLets();
    keepPromptingUser();
  }
  keepPromptingUser = function() {
    var self = this;
    prompt.get(["guessLetter"], function(err, result){
      console.log("The letter or space you guessed is " + result.guessLetter);
      //var findHowManyOfUserGuess = this.currentWrd.checkIfLetterFound(result.guessLetter);
      var findHowManyOfUserGuess = 1;     //created this variable to test the game
      if (findHowManyOfUserGuess === 0){
        console.log("You guessed wrong!");
        this.guessesRemaining -= 1;
      } else {
        console.log("You guessed right!")
        // if (this.currentWrd.didWeFindTheWord() === true) {
        //   console.log("You won!")
        //   return 1;
        // }
      }
      console.log("Guesses remaining: " + this.guessesRemaining);
      //console.log(this.currentWrd.wordRender());
      if (this.guessesRemaining === 0 && this.currentWrd === false){
        keepPromptingUser();
      } else if (this.guessesRemaining === 0){ 
        console.log("Game over bro " + this.currentWrd);
      } else {
        console.log(this.currentWrd.wordRender());
      }
    }); 
  } 
}


//these are used to check variables in the game
var game1 = new game();
var resultWordBank = game1.wordBank;
var wordBankLength = game1.wordBank.length;
var resultGuessesRemaining = game1.guessesRemaining;
game1.startGame();
var resultsLets = game1.currentWrd;


