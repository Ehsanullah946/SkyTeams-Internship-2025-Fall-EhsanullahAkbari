const { findMissingNumber } = require("./question-30");
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
test("findMissingNumber([1,2,3,5])", findMissingNumber([1,2,3,5]),4);
test("findMissingNumber([1,2,4,5])", findMissingNumber([1,2,4,5]),3);
test("findMissingNumber([3,4,6])", findMissingNumber([3,4,6]),5);
test("findMissingNumber([5,6,8])", findMissingNumber([5,6,8]), 7); 
test("findMissingNumber([8,9,11])", findMissingNumber([8,9,11]), 10); 
