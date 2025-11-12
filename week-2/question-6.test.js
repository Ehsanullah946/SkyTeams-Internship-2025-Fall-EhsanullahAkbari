const {formatSecond} = require("./question-6");
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
test("formatSecond(3665)", formatSecond(3665),"1 h, 1 m, 5 s");
test("formatSecond(30)", formatSecond(30),"0 h, 0 m, 30 s");
test("formatSecond(65)", formatSecond(65),"0 h, 1 m, 5 s");
test("formatSecond(3700)", formatSecond(3700),"1 h, 1 m, 40 s");
test("formatSecond(100000)", formatSecond(100000),"27 h, 46 m, 40 s");