const Decorator = function (stock) {
    this.stock = [];
  }



  //   Functions go here

  Decorator.prototype.checkHasStock = function (){
    if (this.stock == []) {
        return false;
      }
    else {
        return true;
    }
  }

  Decorator.prototype.addPaint = function (paint){
    this.stock.push(paint);
  }


//   Decorator.prototype.totalStock = function (){
//     let total = 0;
//     stock = this.stock;
//     for (let paint in stock){
//       total += paint.litres;
//     };
//     return total;
//   }



  module.exports = Decorator;