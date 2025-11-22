const { sumDegits } = require("./question-21");
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

test("sumDegits(1234)", sumDegits(1234),10);
test("sumDegits(234)", sumDegits(234), 9);
test("sumDegits(653)", sumDegits(653), 14);
test("sumDegits(8763)", sumDegits(8763), 24);
test("sumDegits(8973)", sumDegits(8973), 27);