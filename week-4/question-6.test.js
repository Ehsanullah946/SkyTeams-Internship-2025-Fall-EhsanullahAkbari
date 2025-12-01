const { binarySearch } = require("./question-6");
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
test("binarySearch([1,2,4,5,10],4)", binarySearch([1,2,4,5,10],4),2);
test("binarySearch([1,2,3,4,6],2)", binarySearch([1,2,3,4,6],2),1);
test("binarySearch([1,3,2],1)", binarySearch([1,3,2],1),0);
test("binarySearch([1,2,3,5,6,10,15],10)", binarySearch([1,2,3,5,6,10,15],10),5);