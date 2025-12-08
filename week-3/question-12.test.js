const { checkPalindromNumber } = require("./question-12");
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
test("checkPalindromNumber(523)", checkPalindromNumber(523),false);
test("checkPalindromNumber(3234)", checkPalindromNumber(3234),false);
test("checkPalindromNumber(121)", checkPalindromNumber(121),true);
test("checkPalindromNumber(77)", checkPalindromNumber(77), true); 
test("checkPalindromNumber(1234)", checkPalindromNumber(1234), false); 