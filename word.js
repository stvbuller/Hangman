var Letter = require("./letter.js");
module.exports = Word;

function Word(wrd) {
  this.word = wrd;
  this.lets = []:
  this.found = false;
  this.getsLets = function() {
    //iterate over each letter in wrd property
    for (var i = 0; word.length; i++) {               //??? determinre the number of letter in a word
      this.lets[i] = new Letter(word.charAt(i));                  //??? get letters out of the word
    }
  }
  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn = 0;
    for (var i = 0; lets.length; i++){
      if (Letter.charac === this.guessLetter) {
        Letter.appear = true;
        this.whatToReturn += 1;              //??? add 1 to checkIfLetterFound or whatToReturn
        return checkIfLetterFound //??? or return whatToReturn
      }
    }
  }
  this.didWeFindTheWord = function() {
    this.lets.every(function(curLets))  //??? anonymous function with argument curLets
      // if all letter objects have the true value in their appear property, found = true
        this.found = true;

      return this.found;

  }
}

