const { sentenceAbrevation } = require("./question-17");
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
test("sentenceAbrevation('Ehsan is is Ehsan')", sentenceAbrevation("Ehsan is is Ehsan"),"EiiE");
test("sentenceAbrevation('ali like like ali')", sentenceAbrevation('ali like like ali'),"alla");
test("sentenceAbrevation('cat not not cat')", sentenceAbrevation('cat not not cat'),"cnnc");
test("sentenceAbrevation('name is is Ehsan')", sentenceAbrevation('name is is Ehsan'),'niiE');