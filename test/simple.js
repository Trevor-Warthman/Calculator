var assert = require('chai').assert;
var numbers = [1,2,3,4,5];

describe('Array', function(){
    it('should have 5 things in it',function(){
        assert.equal(numbers.length,5);
    });
    it('should sum to 15', function() {
        assert.equal(numbers.reduce((a,b) => a + b),15);
    });
});
