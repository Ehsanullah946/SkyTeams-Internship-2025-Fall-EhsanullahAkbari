const {  reversePolishNoation } = require("./question-3");
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
test("reversePolishNoation('['2', '1', '+', '3', '*']')", reversePolishNoation(["2", "1", "+", "3", "*"]),9);
test("reversePolishNoation('['1', '1', '+', '3', '*']')", reversePolishNoation(['1', '1', '+', '3', '*']), 6 );
test("reversePolishNoation(['2', '1', '+', '5', '*'])", reversePolishNoation(['2', '1', '+', '5', '*']), 15);
