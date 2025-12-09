const { rotateArray } = require("./question-3");
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
test("rotateArray([1,2,4,5,10])", rotateArray([1,2,4,5,10],3),[4,5,10,1,2]);
test("rotateArray([1,2,3,4,6])", rotateArray([1,2,3,4,6],2),[ 4, 6, 1, 2, 3 ]);
test("rotateArray([1,3,2],1)", rotateArray([1,3,2],1),[  2, 1, 3]);
test("rotateArray([1,2,3,5,6,10,15])", rotateArray([1,2,3,5,6,10,15],2), [10,15,1,2,3,5,6]);