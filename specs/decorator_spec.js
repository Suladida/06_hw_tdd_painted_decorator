const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');



describe('Decorator', function(){

    let decorator;
    let room;
    let paint;

    beforeEach(function(){
        decorator = new Decorator();
        room = new Room(50);
        paint = new Paint(25);
    });

    it("should start with an empty paint stock", function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })
    
    it("should add paint to stock", function(){
        const actual = decorator.addPaint(paint);
        assert.deepStrictEqual(decorator.stock.length, 1)  
    })

    xit("should calculate total litres of paint in stock", function(){
        const actual = decorator.totalStock();
        assert.strictEqual(actual, 25);
    })
    // it("should calculate if it has enough paint to paint a room", function(){})
    // it("should paint room if enough paint in stock", function(){})
})

