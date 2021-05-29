const { Tokenizer } = require("../Tokenizer");
const { ShuntingYard } = require("../ShuntingYard");

/*
    POSTFIX CONVERSION TESTS
*/

//4 + 5 -> 4 5 +
assertEquals(["4", "5", "+"], "4 + 5");

//4 + 5 + 6 -> 4 5 + 6 +
assertEquals(["4", "5", "+", "6", "+"], "4 + 5 + 6");

//4 + 5 * 6 -> 4 5 6 * + 
assertEquals(["4", "5", "6", "*", "+"], "4 + 5 * 6");

//1 + (2 + 1) -> 1 2 1 + +
assertEquals(["1", "2", "1", "+", "+"], "1 + (2 + 1)");

function assertEquals(expected, actual) {
    let t = new Tokenizer(actual)
    let sy = new ShuntingYard(actual)
    let res = sy.getOutputQueue();

    if(expected != res) {
        console.log("passed!")
    }
    else {
        console.error(res + " != " + expected);
    }
};
