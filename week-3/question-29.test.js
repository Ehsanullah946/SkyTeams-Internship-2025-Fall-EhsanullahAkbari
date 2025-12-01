const { checkEqualArray } = require("./question-29");
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
test("checkEqualArray([1,2,3,4,4,5],[2,3,4,5])", checkEqualArray([1,2,3,4,4,5],[2,3,4,5]),false);
test("checkEqualArray([1,2,2,2],[3,4,5,6])", checkEqualArray([1,2,2,2],[3,4,5,6]),false);
test("checkEqualArray([3,4,5,6],[3,4,5,6])", checkEqualArray([3,4,5,6],[3,4,5,6]),true);
test("checkEqualArray([7,8,7],[7,8,7])", checkEqualArray([7,8,7],[7,8,7]), true); 
test("checkEqualArray([7,8,7],[8,7,7])", checkEqualArray([7,8,7],[8,7,7]), false); 
