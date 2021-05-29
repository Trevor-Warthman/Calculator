class Tokenizer { 
    constructor(eq) {
        this.eq = eq;
        this.tokens = [];
        this.currToken = 0;
    }

    getEq() {
        return this.eq;
    }

    tokenize() {
        if(this.tokens = []) this.tokens = this.eq.split(/([+-/*])/g);
        return this.tokens;
    }

    getCurrentToken() {
        return this.tokens[this.currToken];
    }

    getNextToken() {
        return this.tokens[this.currToken + 1];
    }

    getPrevToken() {
        return this.tokens[this.currToken - 1];
    }

    moveNextToken() {
        this.currToken += 1;
    }

    movePrevToken() {
        this.currToken -= 1;
    }
    areRemainingTokens() {
        return this.tokens.length > this.currToken;
    }
}


module.exports = {Tokenizer};