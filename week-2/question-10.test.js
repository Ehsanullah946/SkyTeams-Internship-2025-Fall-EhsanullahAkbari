const { leapYear } = require("./question-10");
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
test("",leapYear(2000),"Leap year");
test("leap year(2004)",leapYear(2004),"Leap year");
test("leap year(2008)",leapYear(2008),"Leap year");
test("leap year(2012)",leapYear(2012),"Leap year");
test("leap year(2016)",leapYear(2016),"Leap year");
test("leap year(2020)",leapYear(2020),"Leap year");
test("leap year(2024)",leapYear(2024),"Leap year");
test("leap year(1900)",leapYear(1900),"not leap year");
test("leap year(2001)",leapYear(2001),"not leap year");
test("leap year(2002)",leapYear(2002),"not leap year");
test("leap year(2003)",leapYear(2003),"not leap year");
test("leap year(2100)",leapYear(2100),"not leap year");
test("leap year(2200)",leapYear(2200),"not leap year");
test("leap year(2023)",leapYear(2023),"not leap year");