const { findSpecificNumber } = require("./question-7");
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
test("findSpecificNumber([1,2,4,5,10],5)", findSpecificNumber([1,2,4,5,10],5),true);
test("findSpecificNumber([1,2,3,4,6],32)", findSpecificNumber([1,2,3,4,6],32), false);
test("findSpecificNumber([1],2)", findSpecificNumber([1],2),false);
test("findSpecificNumber([1,2,3,5,6,10,15],3)", findSpecificNumber([1,2,3,5,6,10,15],3), true);