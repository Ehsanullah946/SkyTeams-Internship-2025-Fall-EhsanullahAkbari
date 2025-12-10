const {  removeAdjacentDuplicate } = require("./question-6");
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
test("removeAdjacentDuplicate('abbc')", removeAdjacentDuplicate('abbc'),'ac');
test("removeAdjacentDuplicate('afssbbc')", removeAdjacentDuplicate('afssbbc'), "afc" );
test("removeAdjacentDuplicate('hfaadn')", removeAdjacentDuplicate('hfaadn'), "hfdn" );
