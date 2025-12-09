const { kLargestElement } = require("./question-24");
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
test("kLargestElement([1,2,2,4,4,5,10],2)", kLargestElement([1,2,2,4,4,5,10],2),5);
test("kLargestElement([1,1,2,3,4,6],1)", kLargestElement([1,1,2,3,4,6],1),6);
test("kLargestElement([1,3,2],2)", kLargestElement([1,3,2],2),2);
test("kLargestElement([1,2,3,5,6,10,15],3)", kLargestElement([1,2,3,3,5,6,3,15],3),5);