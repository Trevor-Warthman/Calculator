class Tokenizer { 
    constructor(eq) {
        this.eq = eq;
        this.tokens = this.tokenize();
        this.currToken = 0;
    }

    getEq() {
        return this.eq;
    }

    tokenize() {
        if(this.tokens = []) {
            let removedSpaces = this.eq.replace(/ /g,'');
            this.tokens = removedSpaces.split(/([-+*^/)(]|sin|cos|tang)/).filter(ele => ele != "")
        }
        return this.tokens;
    }

    getTokens() {
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