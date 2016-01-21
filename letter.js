module.exports = Letter;

function Letter(let) {
  this.charac = let;
  this.appear = false;
  this.letterRender = function() {
    if (this.charac === undefined) {  //??? if charac === false 
      return "_";
    } else {
      return this.charac;
    }
  }
}
