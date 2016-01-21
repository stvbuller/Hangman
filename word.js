var Letter = require("./letter.js");
module.exports = Word;
debugger
function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getsLets = function() {
    //iterate over each letter in wrd property
    for (var i = 0; i < this.word.length; i++) {               //iterate for the nubmer of character in the word 
      this.lets[i] = new Letter(this.word.charAt(i));          //get the characters out of the word
    }
  }
  this.checkIfLetterFound = function(guessLetter) {
    this.whatToReturn = 0;
    for (var i = 0; this.lets.length; i++){
      if (Letter.charac === this.guessLetter) {
        Letter.appear = true;
        this.whatToReturn += 1;              //??? add 1 to checkIfLetterFound or whatToReturn
        return checkIfLetterFound //??? or return whatToReturn
      }
    }
  }
  // this.didWeFindTheWord = function() {
  //   this.lets.every(function(curLets))  //??? anonymous function with argument curLets
  //     // if all letter objects have the true value in their appear property, found = true
  //       this.found = true;

  //     return this.found;

  // }
}

var word1 = new Word("one");
word1.getsLets();


