const { isRotateString } = require("./question-11");
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
test("isRotateString('Ehsan','hsanE',1)", isRotateString('Ehsan','hsanE',1),true);
test("isRotateString('waterbottle', 'erbottlewat',3)", isRotateString("waterbottle", "erbottlewat",3),true);
test("isRotateString('waterbottle', 'erbottlewat',2)", isRotateString("waterbottle", "erbottlewat",2),false);