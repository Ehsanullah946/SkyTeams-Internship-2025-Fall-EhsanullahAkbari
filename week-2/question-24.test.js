const { GCD } = require("./question-24");
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

test("GCD(24,36)", GCD(24,36),12);
test("GCD(0,5)", GCD(0,5), 5);
test("GCD(7,13)", GCD(7,13), 1);
