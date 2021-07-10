const {Tokenizer}= require("../../Tokenizer");
const {ShuntingYard}= require("../../ShuntingYard");
const { expect }= require("chai");

describe('Infix -> Postfix',function() {
    it('4 + 5 -> 4 5 +', function() {
        let t = new Tokenizer("4 + 5");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["4", "5", "+"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('44 + 5 -> 44 5 +', function() {
        let t = new Tokenizer("44 + 5");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["44", "5", "+"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('4 + 5 + 6 -> 4 5 + 6 +', function() {
        let t = new Tokenizer("4 + 5 + 6");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["4", "5", "+", "6", "+"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('4 + 5 * 6 -> 4 5 6 * + ', function() {
        let t = new Tokenizer("4 + 5 * 6");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["4", "5", "6", "*", "+"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('1 + (2 + 1) -> 1 2 1 + +', function() {
        let t = new Tokenizer("1 + (2 + 1)");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["1", "2", "1", "+", "+"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('1 * (2 + 1) -> 1 2 1 + *', function() {
        let t = new Tokenizer("1 * (2 + 1)");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["1", "2", "1", "+", "*"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('2sin(50/20)', function() {
        let t = new Tokenizer("2sin(50)");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["2", "50", "SIN", "*"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })

    it('2sin(50PI)', function() {
        let t = new Tokenizer("2sin(50PI)");
        let sh = new ShuntingYard(t, true);
        let expected = JSON.stringify(["2", "50", "PI", "*", "SIN", "*"]);
        let actual = JSON.stringify(sh.shuntingYard());
        expect(actual).to.equal(expected);
    })
})

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
    it('165.003255594 = 5tan((4+77/5+cos(sin(3))))', function() {
        let ans= sh.evaluatePostfix(["5","4","77","5","/","+","3","SIN","COS","+","TAN","*"]);
        let expected= 165.003255594;
        expect(ans).to.be.closeTo(expected, .001);
    });
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
    it('1.06440765582 = 5^2sin(3^9tan(5)/6)', function() {
        let ans= sh.evaluatePostfix(["5","2","^","3","9","^","5","TAN","*","6","/","SIN","*"]);
        let expected= 1.06440765582;
        expect(ans).to.be.closeTo(expected, .001);
    });
});