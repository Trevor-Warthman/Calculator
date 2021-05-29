const { Tokenizer } = require("./Tokenizer");

class ShuntingYard { 
    constructor(tokens) {
        this.tokens = tokens
        this.outputQueue = []
        this.operatorStack = []

        this.PRECEDENCE = {
            "^": 4, 
            "*": 4, 
            "/": 3, 
            "+": 2, 
            "-": 2 

        }
    }

    getOutputQueue() {
        return this.outputQueue;
    }
    shuntingYard() {
        this.tokens.tokenize();
        while(this.tokens.areRemainingTokens()) {
            let token = this.tokens.getCurrentToken();
            console.log(token);
            if(this.isNumber(token)) {
                this.outputQueue.push(token);
            }

            else if(this.isFunction(token)) {
                this.operatorStack.push(token);
            }

            else if(this.isOperator(token)){
                while(this.keepPoppingOps(token)) {
                    this.outputQueue.push(this.operatorStack.shift())
                }
                this.operatorStack.push(token);
            }

            else if(token == "(") {
                this.operatorStack.push(token);
            }

            else if(token == ")") {
                while(this.operatorStack[0] != "(") {
                    this.outputQueue.push(this.operatorStack.shift());
                }
                if(this.operatorStack[0] == "(") {
                    this.operatorStack.shift();
                }
                if(this.isFunction(this.operatorStack[0])) {
                    this.outputQueue.push(this.operatorStack.shift());
                }
            }
            this.tokens.moveNextToken();

        }
        this.outputQueue = this.outputQueue.concat(this.operatorStack);
    }

    evaluatePostfix() {
        evalStack = [];
        for(let i = 0; i < this.outputQueue.length; i) {
            let ele = this.outputQueue[i]
            if(this.isNumber(ele)) {
                evalStack.push(ele)
            } 
            else {
                val1 = evalStack.shift()
                val2 = evalStack.shift()
                evalStack.push(evaluate(val1,val2,ele));
            }
        }
        return evalStack.shift();
    }

    evaluate(val1, val2, op) {
        if(op == "+") { return val1 + val2;}
        if(op == "-") { return val1 - val2;}
        if(op == "*") { return val1 * val2;}
        if(op == "/") { return val1 / val2;}
    }
    isNumber(token) {
        return '1234567890'.includes(token.charAt(0));
    }

    isFunction(token) {
        return ["SIN", "COS", "TANG"].includes(token);
    }

    isOperator(token) {
        return ["+", "/", "-", "*", "^"].includes(token);
    }

    keepPoppingOps(token) {
        if(this.operatorStack.length > 0) {
            if(this.PRECEDENCE[this.operatorStack[0]] > this.PRECEDENCE[token]
                || (this.PRECEDENCE[this.operatorStack[0]] == this.PRECEDENCE[token] && this.token != "^")) {
                    if(this.operatorStack[0] != "(") {
                        return true;
                    }
                }
        }
        return false;
    }

}

module.exports = {ShuntingYard};
