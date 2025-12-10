const {  isValidParentheses } = require("./question-1");
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
test("isValidParentheses('{{{{}}{}')", isValidParentheses('{{{{}}{}'),false);
test("isValidParentheses('(){({}}))')", isValidParentheses('(){({}}))'), false );
test("isValidParentheses('()[]{}')", isValidParentheses('()[]{}'), true);
test("isValidParentheses('(){}')", isValidParentheses('(){}'), true);
