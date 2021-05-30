const { Tokenizer } = require("../Tokenizer");
const { ShuntingYard } = require("../ShuntingYard");

/*
    POSTFIX CONVERSION TESTS
*/
console.log("Postfix Conversion (Shunting Yard) Tests")

//4 + 5 -> 4 5 +
assertEquals(["4", "5", "+"], "4 + 5");

//4 + 5 -> 4 5 +
assertEquals(["44", "5", "+"], "44 + 5");

//4 + 5 + 6 -> 4 5 + 6 +
assertEquals(["4", "5", "+", "6", "+"], "4 + 5 + 6");

//4 + 5 * 6 -> 4 5 6 * + 
assertEquals(["4", "5", "6", "*", "+"], "4 + 5 * 6");

//1 + (2 + 1) -> 1 2 1 + +
assertEquals(["1", "2", "1", "+", "+"], "1 + (2 + 1)");

//1 * (2 + 1) -> 1 2 1 + *
assertEquals(["1", "2", "1", "+", "*"], "1 * (2 + 1)");

//2sin(50/20)
assertEquals(["2", "50", "SIN", "*"], "2sin(50)");

//2sin(50/20)
assertEquals(["2", "50", "PI", "*", "SIN", "*"], "2sin(50PI)");

//2sin(50/20)

function assertEquals(expected, actual) {
    let t = new Tokenizer(actual);
    let sy = new ShuntingYard(t);
    sy.shuntingYard();
    let res = sy.getOutputQueue();

    if(arraysEqual(expected, res)) {
        console.log("passed!")
    }
    else {
        console.error(res + " != " + expected);
    }
};

function arraysEqual(arr1, arr2) {
    if(arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i+=1) {
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
}

/*
    POSTFIX EVALUATION TESTS
*/
console.log("Postfix Evaluation Tests")
evalEquation(2, "1+1");
evalEquation(4, "1+1 *3");
evalEquation(2.5, "1 + 3 / 2");
evalEquation(94, "2 * (7+40)");
evalEquation(1.19694428821, "2sin(50/20)");
evalEquation(165.003255594, "5tan((4+77/5+cos(sin(3))))");
evalEquation(5, "5sin(pi/2)");

function evalEquation(expected, eq) {
    let sh = new ShuntingYard(new Tokenizer(eq));
    sh.shuntingYard();
    let ans = sh.evaluatePostfix() - 0;
    if(ans.toFixed(5) == expected.toFixed(5)) {
        console.log("passed!")
    }
    else {
        console.error(ans + " != " + expected);
    }
}