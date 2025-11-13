const { trafficSystem } = require("./question-12");
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

test("trafficSystem('green')", trafficSystem("green"), "Go");
test("trafficSystem('red')", trafficSystem("red"), "Stop");
test("trafficSystem('yellow')", trafficSystem("yellow"), "Ready");