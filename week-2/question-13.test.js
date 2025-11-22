const { monthFinder } = require("./question-13");
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

test("monthFinder(1)", monthFinder(1), "Jenuary:30");
test("monthFinder(2)", monthFinder(2), "fabaruary:29");
test("monthFinder(3)", monthFinder(3), "March:28");