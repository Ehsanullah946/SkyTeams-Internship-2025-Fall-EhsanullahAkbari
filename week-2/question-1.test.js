const { swap } = require("./question-1");
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
test("swap(5, 10)", swap(5, 10), "a=10 b=5");
test("swap('apple', 'banana')", swap('apple', 'banana'), "a=banana b=apple");