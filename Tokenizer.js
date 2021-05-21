class Tokenizer { 
    constructor(eq) {
        this.eq = eq;
        this.tokens = [];
    }

    getEq() {
        return this.eq;
    }

    tokenize() {
        if(this.tokens = []) this.tokens = this.eq.split(/([+-/*])/g);
        return this.tokens;
    }

    getCurrentToken() {
        return this.tokens.shift();
    }

    getNextToken() {
        return this.tokens[1];
    }
}

let t = new Tokenizer("1+1*5");
console.log(t.tokenize());
console.log(t.getCurrentToken());
console.log(t.getNextToken());
console.log(t.getCurrentToken());
console.log(t.getCurrentToken());

module.exports = {Tokenizer};