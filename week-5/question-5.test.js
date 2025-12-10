const {  backSpaceStringCompare } = require("./question-5");
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
test("backSpaceStringCompare('ab#c', 'ad#c')", backSpaceStringCompare('ab#c', 'ad#c'),true);
test("backSpaceStringCompare('ac#bd','ab#bd')", backSpaceStringCompare('ac#bd','ab#bd'), true );
test("backSpaceStringCompare('afg#l', 'aflG#')", backSpaceStringCompare('afg#l', 'aflG#'), true);
test("backSpaceStringCompare('ag#l', 'afl#')", backSpaceStringCompare('af#l', 'afG#'), false);
