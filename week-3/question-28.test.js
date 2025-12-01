const { removeDuplicateElement } = require("./question-28");
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
test("removeDuplicateElement([1,2,3,4,4,5])", removeDuplicateElement([1,2,3,4,4,5]),[1,2,3,4,5]);
test("removeDuplicateElement([1,2,2,2])", removeDuplicateElement([1,2,2,2]),[1,2]);
test("removeDuplicateElement([3,4,4,4])", removeDuplicateElement([3,4,4,4]),[3,4]);
test("removeDuplicateElement([7,8,7])", removeDuplicateElement([7,8,7]), [7,8]); 


