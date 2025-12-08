const { isLeapYear } = require("./question-10");
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
test("leap year(2000)",isLeapYear(2000),true);
test("leap year(2004)",isLeapYear(2004),true);
test("leap year(2008)",isLeapYear(2008),true);
test("leap year(2012)",isLeapYear(2012),true);
test("leap year(2016)",isLeapYear(2016),true);
test("leap year(2020)",isLeapYear(2020),true);
test("leap year(2024)",isLeapYear(2024),true);
test("leap year(1900)",isLeapYear(1900),false);
test("leap year(2001)",isLeapYear(2001),false);
test("leap year(2002)",isLeapYear(2002),false);
test("leap year(2003)",isLeapYear(2003),false);
test("leap year(2100)",isLeapYear(2100),false);
test("leap year(2200)",isLeapYear(2200),false);
test("leap year(2023)",isLeapYear(2023),false);
