const { countNumber } = require("./question-20");
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

test("countNumber(1234)", countNumber(1234),4);
test("countNumber(234)", countNumber(234), 3);
test("countNumber(653)", countNumber(653), 3);
test("countNumber(8763)", countNumber(8763), 4);
test("countNumber(8973)", countNumber(8973), 4);