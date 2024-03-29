const { Tokenizer } = require("../Tokenizer");

/*
    TOKENIZER tokenize function tests
*/
assertEquals(["4", "+", "5"], "4 + 5");
assertEquals(["4", "+", "5"], "4+5");
assertEquals(["44", "+", "5"], "44 + 5");
assertEquals(["44", "+", "5", "*", "4", "-", "6", "/", "2000"], "44 + 5 * 4 -6/2000");
assertEquals(["5", "+", "(", "100", "*", "3", ")"], "5 + (100*3)");
assertEquals(["SIN", "(", "100", ")"], "SIN(100)");
assertEquals(["11", "/","(","10","*", "COS", "(", "100", "+", "4","*","4",")",")"], "11/(10COS(100+4*4))");
assertEquals(["11.5", "-", "10"], "11.5-10");
assertEquals(["SIN", "(", "5", "*", "PI", ")"], "SIN(5PI)")
assertEquals(["2", "*", "SIN", "(", "50", ")"], "2SIN(50)")

function assertEquals(expected, actual) {
    let t = new Tokenizer(actual);
    res = t.getTokens();
    if(arraysEqual(expected, res)) {
        console.log("passed!")
    }
    else {
        console.error(res + " != " + expected);
    }
}

function arraysEqual(arr1, arr2) {
    if(arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i+=1) {
        if(arr1[i] != arr2[i]) return false;
    }
    return true;
}

/*
    TOKENIZER implied multiplication
*/

funcImpliedMultTests(["1","*","COS"],["1","COS"])
funcImpliedMultTests(["4","+","5"],["4","+","5"])

function funcImpliedMultTests(expected, inp) {
    let t = new Tokenizer("1-1");
    let actual = t.updateImpliedMult(inp)
    if(arraysEqual(expected, actual)) {
        console.log("passed!")
    }
    else {
        console.error(actual + " != " + expected);
    }
}