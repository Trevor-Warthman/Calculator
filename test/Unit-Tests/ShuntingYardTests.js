const {Tokenizer}= require("../../Tokenizer");
const {ShuntingYard}= require("../../ShuntingYard");
const { expect }= require("chai");

describe('Evaluation Postfix',function() {
    let sh =new ShuntingYard(null, true);
    it('2 = 1 + 1', function() {
        let ans = sh.evaluatePostfix(['1','1','+']);
        let expected = 2;
        expect(ans).to.equal(expected);
     });
    it('4 = 1+1 *3', function() {
        let ans = sh.evaluatePostfix(['1','1','3', '*', '+']);
        let expected = 4;
        expect(ans).to.equal(expected);
    });
    it('2.5 = 1 + 3 / 2', function() {
        let ans = sh.evaluatePostfix(['1','3','2', '/', '+']);
        let expected = 2.5;
        expect(ans).to.equal(expected);
    });
    it('94 = "2 * (7+40)"', function() {
        let ans = sh.evaluatePostfix(['2','7','40', '+', '*']);
        let expected = 94;
        expect(ans).to.equal(expected);
    });
    it('1.19694428821 =  2sin(50/20)', function() {
        let ans= sh.evaluatePostfix(['2', '50', '20', '/', 'SIN', '*']);
        let expected= 1.19694428821;
        expect(ans).to.be.closeTo(expected, .001);
    });
    // it('165.003255594 = 5tan((4+77/5+cos(sin(3))))', function() {
    //     let ans= sh.evaluatePostfix(['5', '50', '20', '/', 'SIN', '*']);
    //     let expected= 165.003255594;
    //     expect(ans).to.be.closeTo(expected);
    // });
    it('5 = 5sin(pi/2)', function() {
        let ans= sh.evaluatePostfix(['5', 'PI', '2', '/', 'SIN', '*']);
        let expected= 5;
        expect(ans).to.equal(expected);
    });
    it('25 = 5^2', function() {
        let ans= sh.evaluatePostfix(['5', '2', '^']);
        let expected= 25
        expect(ans).to.equal(expected);;
    });
    // it('1.06440765582 = 5^2sin(3^9tan(5)/6)', function() {
    //     let ans= sh.evaluatePostfix();
    //     let expected= 1.06440765582;
    //     expect(ans).to.equal(expected);
    // });
});