const { findCategory } = require("./question-8");
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
test("findCategory(4)", findCategory(4),"Positive");
test("findCategory(5)", findCategory(5),"Positive");
test("findCategory(-4)", findCategory(-4),"Negetive");
test("findCategory(0)", findCategory(0),"Zero");