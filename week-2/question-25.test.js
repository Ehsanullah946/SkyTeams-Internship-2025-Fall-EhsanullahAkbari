const { LCM } = require("./question-25");
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

test("LCM(12,18)", LCM(24,36),72);
test("LCM(0,5)", LCM(4,5), 20);
test("LCM(7,13)", LCM(7,13), 91);
