const { balancedParanthesis  } = require("./question-20");
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
test("balancedParanthesis('{({})}')", balancedParanthesis("{({})}"),true);
test("balancedParanthesis('({[]})')", balancedParanthesis('({[]})'),true);
test("balancedParanthesis('({[({})]})')", balancedParanthesis('({[({})]})'),true);
test("balancedParanthesis('([]])')", balancedParanthesis('({[]])'),false);