  var Letter = require("./letter.js");
module.exports = Word;

function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getLets = function() {
    //create Letter objects for each letter in the word
    //and put the objects in an arry
    for (var i = 0; i < this.word.length; i++) {
      this.lets[i] = new Letter(this.word.charAt(i));
    }
  }
  //check to see if the guess letter is in the word
  this.checkIfLetterFound = function(guessLetter) {
    this.whatToReturn = 0;
    for (var i = 0; i < this.lets.length; i++){
      if (guessLetter === this.lets[i].charac) {
        this.lets[i].appear = true;
        this.whatToReturn += 1;
      }
    }
    return this.whatToReturn;
  }
  //*******  didWeFindTheWord is not working
  //if the appear property of all letters is equal to true set found = true
  // this.didWeFindTheWord = function() {
  //   //array_name.every(function() { ….//yourcode });
  //   this.lets.every(function(curLets) {
  //     if (curLets.appear == true){
  //       this.found = true;
  //     }
  //   });
  //   return this.found;
  // }


  //*** alternate didWeFindTheWord function created by ajurado2204
  this.didWeFindTheWord = function(){
    var result = this.lets.every(function(curLet){
      if(curLet.appear === true){
        curLet.found = true;
        return curLet.found;
      }
    });
    return result;
  }

  //create a string of the characters guessed in the array using letterRender()
  this.wordRender = function() {
    this.str = "";
    var string1 = "";
    for (var i = 0; i < this.lets.length; i++){
       string1 = string1 + this.lets[i].letterRender();
       this.str = string1;
    }
    return this.str;
  }
}

//these are used to test the functions in word.js
// var word1 = new Word("nnnn");
// word1.getLets();
// var resultLetterCheck = word1.checkIfLetterFound("n");
// var resultWordCheck = word1.didWeFindTheWord();      //this is not working
// var resultWordRender = word1.wordRender();
