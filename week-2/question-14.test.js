const { charecterType } = require("./question-14");
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

test('charecterType("a")',charecterType("a"),"Vowel"); 
test('charecterType("Z")',charecterType("Z"),"Consonant"); 
test('charecterType("5")',charecterType("5"),"Digit"); 
test('charecterType("@")',charecterType("@"),"Special Symbol"); 