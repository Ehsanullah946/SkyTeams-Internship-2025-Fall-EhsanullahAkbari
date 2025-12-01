const { numberFactors } = require("./question-4");
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

test("numberFactors(20)", numberFactors(20),[1,2,4,5,10]);
test("numberFactors(12)", numberFactors(12), [1,2,3,4,6]);
test("numberFactors(5)", numberFactors(5), [1]);
test("numberFactors(30)", numberFactors(30), [1,2,3,5,6,10,15]);