const assert = require('assert');
const Paint = require('../paint.js');


describe('Paint', function(){

    let paint;
    let paint2;

    beforeEach(function(){
        paint = new Paint(10);
        paint2 = new Paint(20, false);
    });

    it("should have litres", function(){
        const actual = paint.checkLitres();
        assert.strictEqual(actual, 10);
    })

    it("should start empty", function(){
        const actual = paint.checkEmpty();
        assert.strictEqual(actual, false)
    })

    it("should empty itself of paint", function(){
        paint2.emptyCan();
        const actual = paint2.empty;
        assert.strictEqual(actual, true);
    })



})