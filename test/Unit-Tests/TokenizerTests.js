const {Tokenizer} = require("../../Tokenizer");
const expect = require('chai').expect;

describe('Tokenizer tokenize', function(){
    it('[1, +, 1] from "1+1"', function() {

        let t = new Tokenizer("1+1");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(['1','+','1']);
        expect(actual).to.equal(expected)
    })
    it('["4", "+", "5"] from "4 + 5"', function() {
        let t = new Tokenizer("4 + 5");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["4", "+", "5"]);
        expect(actual).to.equal(expected);
    })
    it('["4", "+", "5"] from "4+5"', function() {
        let t = new Tokenizer("4+5");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["4", "+", "5"]);
        expect(actual).to.equal(expected);
    })
    it('["44", "+", "5"] from "44 + 5"', function() {
        let t = new Tokenizer("44 + 5");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["44", "+", "5"]);
        expect(actual).to.equal(expected);
    })
    it('["44", "+", "5", "*", "4", "-", "6", "/", "2000"] from "44 + 5 * 4 -6/2000"', function() {
        let t = new Tokenizer("44 + 5 * 4 -6/2000");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["44", "+", "5", "*", "4", "-", "6", "/", "2000"]);
        expect(actual).to.equal(expected);
    })
    it('["5", "+", "(", "100", "*", "3", ")"] from "5 + (100*3)"', function() {
        let t = new Tokenizer("5 + (100*3)");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["5", "+", "(", "100", "*", "3", ")"]);
        expect(actual).to.equal(expected);
    })
    it('["SIN", "(", "100", ")"] from "SIN(100)"', function() {
        let t = new Tokenizer("SIN(100)");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["SIN", "(", "100", ")"]);
        expect(actual).to.equal(expected);
    })
    it('["11", "/","(","10","*", "COS", "(", "100", "+", "4","*","4",")",")"] from "11/(10COS(100+4*4))"', function() {
        let t = new Tokenizer("11/(10COS(100+4*4))");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["11", "/","(","10","*", "COS", "(", "100", "+", "4","*","4",")",")"]);
        
        expect(actual).to.equal(expected);
    })
    it('["11.5", "-", "10"] from "11.5-10"', function() {
        let t = new Tokenizer("11.5-10");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["11.5", "-", "10"]);
        expect(actual).to.equal(expected);
    })
    it('["SIN", "(", "5", "*", "PI", ")"] from "SIN(5PI)', function() {
        let t = new Tokenizer("SIN(5PI)");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["SIN", "(", "5", "*", "PI", ")"]);
        expect(actual).to.equal(expected);
    })
    it('["2", "*", "SIN", "(", "50", ")"] from "2SIN(50)', function() {
        let t = new Tokenizer("2SIN(50)");
        let actual = JSON.stringify(t.getTokens());
        let expected = JSON.stringify(["2", "*", "SIN", "(", "50", ")"]);
        expect(actual).to.equal(expected);
    })
});

describe('Tokenizer add implied multiplication', function(){
    let t = new Tokenizer("")
    it('adds implied multiplication when there is number next to function', function() {
        let actual = JSON.stringify(t.updateImpliedMult(["1","COS"]));
        let expected = JSON.stringify(["1","*","COS"]);
        expect(actual).to.equal(expected);
    })
    it('dont add multiplication when unnecessary', function() {
        let actual = JSON.stringify(t.updateImpliedMult(["4","+","5"]));
        let expected = JSON.stringify(["4","+","5"]);
        expect(actual).to.equal(expected);
    })
})
