// Author: Ehsanullah Akbari
// Date: 2025-10-11
// exercise 2 of week-2 finding the area and perimeter of rectangle
// example
// input : lgngth=4 width=5
// output:  area=20 perimeter=20

const { rectangle } = require("./question-3");
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
test("rectangle(5, 10)", rectangle(5, 10), "area=50 perimeter=30");
test("rectangle(4,6)", rectangle(4,6), "area=24 perimeter=20");
test("rectangle(4,1)", rectangle(4,1), "area=4 perimeter=10");
test("rectangle(3,5)", rectangle(3,5), "area=15 perimeter=16");