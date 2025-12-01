const {  mergeArray } = require("./question-2");
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
test("mergeArray([1,2,4,5,10],[11,33,44,6])", mergeArray([1,2,4,5,10],[11,33,44,6,8]),[1,2,4,5,6,8,10,11,33,44]);
test("mergeArray([1, 3, 5], [2, 4, 6])", mergeArray([1, 3, 5], [2, 4, 6] ), [1, 2, 3, 4, 5, 6] );
test("mergeArray([10, 20, 4, 45, 99],[3,4,5,6])", mergeArray([10, 20, 4, 45],[3,4,5,6]), [3,4,4,5,6,10, 20, 45]);
