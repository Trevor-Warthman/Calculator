const { Tokenizer } = require("./Tokenizer");

class ShuntingYard { 
    constructor(tokens) {
        this.tokens = tokens
        this.outputQueue = []
        this.operatorStack = []

        this.PRECEDENCE = {
            "^": 4, 
            "*": 3, 
            "/": 3, 
            "+": 2, 
            "-": 2 

        }
    }

    getOutputQueue() {
        return this.outputQueue;
    }
    shuntingYard() {
        while(this.tokens.areRemainingTokens()) {
            let token = this.tokens.getCurrentToken();
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
                this.operatorStack.unshift(token);
            }

            else if(token == "(") {
                this.operatorStack.unshift(token);
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
        let evalStack = [];
        for(let i = 0; i < this.outputQueue.length; i+=1) {
            let ele = this.outputQueue[i]
            if(this.isNumber(ele)) {
                evalStack.unshift(ele - 0)
            } 
            else if(this.isOperator(ele)) {
                let val2 = evalStack.shift()
                let val1 = evalStack.shift()
                evalStack.unshift(this.evaluate(val1,val2,ele));
            }
            else {
                //do function stuff here
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
        return token in this.PRECEDENCE;
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
