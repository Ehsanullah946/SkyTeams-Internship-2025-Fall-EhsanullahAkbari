const { studentGradeCatagory } = require("./question-9");
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
test("studentGradeCatagory(50)", studentGradeCatagory(50),"Grade:E");
test("studentGradeCatagory(40)", studentGradeCatagory(40),"Grade:F");
test("studentGradeCatagory(88)", studentGradeCatagory(88),"Grade:B");
test("studentGradeCatagory(90)", studentGradeCatagory(90),"Grade:A");
test("studentGradeCatagory(77)", studentGradeCatagory(77),"Grade:C");
test("studentGradeCatagory(66)", studentGradeCatagory(66),"Grade:D");

