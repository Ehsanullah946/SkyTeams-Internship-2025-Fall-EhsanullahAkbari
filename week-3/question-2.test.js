const { reverseNumber } = require("./question-2");
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

test("reverseNumber(1234)", reverseNumber(1234),4321);
test("reverseNumber(234)", reverseNumber(234), 432);
test("reverseNumber(653)", reverseNumber(653), 356);
test("reverseNumber(8763)", reverseNumber(8763), 3678);
test("reverseNumber(8973)", reverseNumber(8973), 3798);