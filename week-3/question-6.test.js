const { minNumber } = require("./question-6");
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
test("minNumber([1,2,4,5,10])", minNumber([1,2,4,5,10]),1);
test("minNumber([1,2,3,4,6])", minNumber([1,2,3,4,6]), 1);
test("minNumber([1])", minNumber([1]),1);
test("minNumber([1,2,3,5,6,10,15])", minNumber([1,2,3,5,6,10,15]), 1);