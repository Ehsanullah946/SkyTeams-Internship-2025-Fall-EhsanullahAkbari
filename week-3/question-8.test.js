const { sumElement } = require("./question-8");
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
test("sumElement([1,2,4,5,10])", sumElement([1,2,4,5,10]),22);
test("sumElement([1,2,3,4,6])", sumElement([1,2,3,4,6]), 16);
test("sumElement([1])", sumElement([1]),1);
test("sumElement([1,2,3,5,6,10,15])", sumElement([1,2,3,5,6,10]), 27);