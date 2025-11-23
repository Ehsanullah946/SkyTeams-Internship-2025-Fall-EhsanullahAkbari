const { maxNumber } = require("./question-5");
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
test("maxNumber([1,2,4,5,10])", maxNumber([1,2,4,5,10]),10);
test("maxNumber([1,2,3,4,6])", maxNumber([1,2,3,4,6]), 6);
test("maxNumber([1])", maxNumber([1]),1);
test("maxNumber([1,2,3,5,6,10,15])", maxNumber([1,2,3,5,6,10,15]), 15);