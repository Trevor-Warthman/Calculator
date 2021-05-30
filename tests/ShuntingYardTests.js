const { Tokenizer } = require("../Tokenizer");
const { ShuntingYard } = require("../ShuntingYard");

/*
    POSTFIX CONVERSION TESTS
*/

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