//import ShuntingYard from './ShuntingYard.js';
//const Tokenizer = require("./Tokenizer");
var assert = require('chai').assert;

describe('Basic Addition Test',function() {
    it('should return 2 from 1 + 1', function() {
        let t = new Tokenizer("1 + 1");
        let sh = new ShuntingYard(t, false);
        sh.shuntingYard();
        let ans = sh.evaluatePostfix();
        assert.equal(ans,2);
    });
});