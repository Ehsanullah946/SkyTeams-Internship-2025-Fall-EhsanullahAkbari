const { revNumber } = require("./question-19");
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

test("revNumber(1234)", revNumber(1234),4321);
test("revNumber(234)", revNumber(234), 432);
test("revNumber(653)", revNumber(653), 356);
test("revNumber(8763)", revNumber(8763), 3678);
test("revNumber(8973)", revNumber(8973), 3798);