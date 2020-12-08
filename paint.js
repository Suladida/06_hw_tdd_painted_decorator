const Paint = function (litres, empty = false) {
    this.litres = litres;
    this.empty = empty;
  }

// functions go here


Paint.prototype.checkLitres = function(){
    return this.litres;
}

Paint.prototype.checkEmpty = function (){
    if (this.empty === false) {
        return false;
      }
    else {
        return true;
    }
  }

Paint.prototype.emptyCan = function (){
    this.empty = true;
}

module.exports = Paint;