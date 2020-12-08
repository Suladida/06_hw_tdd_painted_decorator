const Room = function (area, painted = false) {
    this.area = area;
    this.painted = painted;
  }



  //   Functions go here

  Room.prototype.checkArea = function(){
      return this.area;
  }

  Room.prototype.checkNotPainted = function (){
    if (this.painted === false) {
        return false;
      }
    else {
        return true;
    }
  }

  Room.prototype.paintRoom = function(){
      this.painted = true;
  }

  module.exports = Room;