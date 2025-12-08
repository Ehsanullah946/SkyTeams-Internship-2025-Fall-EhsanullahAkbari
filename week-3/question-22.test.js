const { collatzSequence } = require("./question-22");
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
test("collatzSequence(6)", collatzSequence(6),[6, 3, 10, 5, 16,8, 4,  2, 1]);
test("collatzSequence(3)", collatzSequence(3),[3, 10, 5, 16,8,  4, 2, 1]);
test("collatzSequence(4)", collatzSequence(4),[ 4, 2, 1 ]);
test("collatzSequence(5)", collatzSequence(5), [ 5, 16, 8, 4, 2, 1 ]); 