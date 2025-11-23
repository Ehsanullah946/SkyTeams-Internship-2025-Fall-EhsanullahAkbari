const { countDuplicate } = require("./question-9");
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
test("countDuplicate([1,2,4,5,10],20)", countDuplicate([1,2,4,5,10],20),0);
test("countDuplicate([1,2,3,3,4,6],3)", countDuplicate([1,2,3,3,4,6],3), 2);
test("countDuplicate([1],1)", countDuplicate([1],1),1);
test("countDuplicate([1,2,3,5,6,10,,10,10,15],10)", countDuplicate([1,2,3,5,6,10,,10,10,15],10), 3);