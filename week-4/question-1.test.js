const { findSecondLargeNo } = require("./question-1");
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
test("findSecondLargeNo([1,2,4,5,10])", findSecondLargeNo([1,2,4,5,10]),5);
test("findSecondLargeNo([1,2,3,4,6])", findSecondLargeNo([1,2,3,4,6]), 4);
test("findSecondLargeNo([1])", findSecondLargeNo([1]),1);
test("findSecondLargeNo([1,2,3,5,6,10,15])", findSecondLargeNo([1,2,3,5,6,10,15]), 10);