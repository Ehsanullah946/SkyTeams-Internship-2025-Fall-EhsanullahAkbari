const { findUniqueElement } = require("./question-27");
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
test("findUniqueElement([1,2,3,4,4,5])", findUniqueElement([1,2,3,4,4,5]),[1,2,3,4,5]);
test("findUniqueElement([1,2,2,2])", findUniqueElement([1,2,2,2]),[1,2]);
test("findUniqueElement([3,4,4,4])", findUniqueElement([3,4,4,4]),[3,4]);
test("findUniqueElement([7,8,7])", findUniqueElement([7,8,7]), [7,8]); 