const { findEvenOrOdd } = require("./question-7");
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
test("findEvenOrOdd(4)", findEvenOrOdd(4),"Even");
test("findEvenOrOdd(5)", findEvenOrOdd(5),"Odd");
test("findEvenOrOdd(0)", findEvenOrOdd(0),"Even");
test("findEvenOrOdd(1)", findEvenOrOdd(1),"Odd");