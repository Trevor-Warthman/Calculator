class Tokenizer { 
    constructor(eq) {
        this.eq = eq
    }

    getEq() {
        return this.eq;
    }

    tokenize() {
        return this.eq.split(/([+-/*])/g)
    }
}

t = new Tokenizer("55+10-5/3*3");
console.log(t.tokenize());
module.exports = {Tokenizer};