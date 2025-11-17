const { checkArmstrong } = require("./question-15");
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
test("checkArmstrong(153)", checkArmstrong(153),true);
test("checkArmstrong(123)", checkArmstrong(123),false);
test("checkArmstrong(24)", checkArmstrong(24),false);
test("checkArmstrong(42)", checkArmstrong(42),false); 
test("checkArmstrong(423)", checkArmstrong(423), false); 