var Letter = require("./letter.js");
module.exports = Word;

function Word(wrd) {
  this.word = wrd;
  this.lets = [];
  this.found = false;
  this.getsLets = function() {
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
  //if the appear property of all letters is equal to true set found = true
  this.didWeFindTheWord = function() {
    //array_name.every(function() { ….//yourcode });
    this.lets.every(function(curLets) {
      if (curLets.appear == true){
        this.found = true;
      }
    });
    return this.found;
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
var word1 = new Word("nnnn");
word1.getsLets();
var resultLetterCheck = word1.checkIfLetterFound("n");
var resultWordCheck = word1.didWeFindTheWord();      //this is not working
var resultWordRender = word1.wordRender();
