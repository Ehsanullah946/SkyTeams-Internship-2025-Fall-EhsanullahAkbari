const { temperatureConverter } = require("./question-4");
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
test("temperatureConverter('F', 77)", temperatureConverter("F",77),25);
test("temperatureConverter('C', 25)", temperatureConverter("C",25),77);
test("temperatureConverter('F', 40)", temperatureConverter("F",40),4.444444444444445);
test("temperatureConverter('C',43)", temperatureConverter("C",43),109.4);