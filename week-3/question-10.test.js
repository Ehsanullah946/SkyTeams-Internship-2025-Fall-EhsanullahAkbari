const { primeNumber } = require("./question-10");
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
test("primeNumber(3)", primeNumber(3),true);
test("primeNumber(5)", primeNumber(5),true);
test("primeNumber(32)", primeNumber(32),false);
test("primeNumber(43)", primeNumber(43), true);