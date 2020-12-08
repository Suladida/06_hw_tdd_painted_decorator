const assert = require('assert');
const Paint = require('../paint.js');
const Room = require('../room.js');


describe('Room', function(){

    let room;
    let paint;

    beforeEach(function(){
        room = new Room(25);
        paint = new Paint(10);
    });

    it("should have an area", function(){
        const actual = room.checkArea()
        assert.strictEqual(actual, 25);
    })

    it("should start not painted", function(){
        const actual = room.checkNotPainted();
        assert.strictEqual(actual, false);
    })

    it("should be able to be painted", function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true);
    })

    

})