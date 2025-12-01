const { isUniqueString } = require("./question-10");
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
test("isUniqueString('Ehsan')", isUniqueString("Ehsan"),true);
test("isUniqueString('ali')", isUniqueString('ali'),true);
test("isUniqueString('rahman')", isUniqueString('rahman'),true);
test("isUniqueString('farhadd')", isUniqueString('farhadd'),false);