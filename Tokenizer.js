class Tokenizer { 
    constructor(eq) {
        this.eq = eq;
        this.currToken = 0;
        this.impliedMultOps = [
            "(","SIN","COS","TAN", "PI"
        ]
        this.valuesRequiringImpliedMult = "0123456789)"
        this.tokens = this.tokenize();
    }

    getEq() {
        return this.eq;
    }

    tokenize() {
        if(this.tokens = []) {
            let removedSpaces = this.eq.replace(/ /g,'');
            this.tokens = removedSpaces.toUpperCase().split(/([-+*^/)(]|SIN|COS|TAN|PI)/).filter(ele => ele != "")
            this.tokens = this.updateImpliedMult(this.tokens);
        }
        return this.tokens;
    }

    updateImpliedMult(arr) {
        let i = 1;
        while(i < arr.length) {
            if(this.impliedMultOps.includes(arr[i].toUpperCase())) {
                if(this.valuesRequiringImpliedMult.includes(arr[i-1][0])) {
                    arr.splice(i,0,"*");
                    i+=1
                }
            }
            i+=1;
        }
        return arr;
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