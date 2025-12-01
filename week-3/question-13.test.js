const { powerNumber } = require("./question-13");
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
test("powerNumber(3,2)", powerNumber(3,2),9);
test("powerNumber(2,3)", powerNumber(2,3),8);
test("powerNumber(3,4)", powerNumber(3,4),81);
test("powerNumber(2,4)", powerNumber(2,4), 16); 
test("powerNumber(3,1)", powerNumber(3,1), 3); 