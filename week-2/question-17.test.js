// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 the sum of N natural number
// example
// input :  5
// output: 15
const { sumNaturalNumber } = require("./question-17");
const test = (name, actual, expect) => {
    const passed = JSON.stringify(actual) === JSON.stringify(expect);
    if (passed) {
        console.log( `${name} passed`);
    } else {
        console.log(`${name} faild`);
        console.log("actual", actual);
        console.log("expect", expect);
    }
}

test("sumNaturalNumber(3)", sumNaturalNumber(3), 6);
test("sumNaturalNumber(4)", sumNaturalNumber(4), 10);
test("sumNaturalNumber(5)", sumNaturalNumber(5), 15);
test("sumNaturalNumber(6)", sumNaturalNumber(6), 21);
test("sumNaturalNumber(7)", sumNaturalNumber(7), 28);