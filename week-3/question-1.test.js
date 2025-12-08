const {countValwels} = require("./question-1");
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

test("countVawels('Ehsanullah')", countValwels('Ehsanullah'),4);
test("countValwels('ali')", countValwels('ali'),2);
test("countValwels('farhad')", countValwels('farhad'),2);
test("countValwels('mahmod')", countValwels('mahmod'),2);
test("countValwels('layla')", countValwels('layla'),2);