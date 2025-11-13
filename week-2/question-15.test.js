const { triangleValidity } = require("./question-15");
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

test("triangleValidity(4,5,4)", triangleValidity(4,5,4), "valid");
test("triangleValidity(10,40,6)", triangleValidity(10,40,6), "not valid");
test("triangleValidity(30,2,3)", triangleValidity(30,2,3), "not valid");
test("triangleValidity(4,5,3)", triangleValidity(4,5,3), "valid");
test("triangleValidity(1,2,4)", triangleValidity(1,2,4), "not valid");