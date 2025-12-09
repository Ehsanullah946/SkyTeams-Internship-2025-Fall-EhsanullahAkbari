const { patternMatching } = require("./question-13");
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
test("patternMatching('Ehsan is is Ehsan')", patternMatching("Ehsan is is Ehsan"),true);
test("patternMatching('ali like like ali')", patternMatching('ali like like ali'),true);
test("patternMatching('cat not not cat')", patternMatching('cat not not cat'),true);
test("patternMatching('name is is Ehsan')", patternMatching('name is is Ehsan'),false);