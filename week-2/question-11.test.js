const { calculator } = require("./question-11");
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

test("calculate(4,5,'-')", calculator(4, 5, '-'), -1);
test("calculate(10,40,'+')", calculator(10,40, '+'), 50);
test("calculate(30,2,'/')", calculator(30, 2, '/'), 15);
test("calculate(4,5,'*')", calculator(4, 5, '*'), 20);
test("calculate(16,2,'-')", calculator(16,2, '/'), 8);