const { intersectionArray } = require("./question-4");
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
test("intersectionArray([1,2,4,5,10],[11,33,44,6])", intersectionArray([1,2,4,5,10],[11,33,44,6,8]),[]);
test("intersectionArray([1, 3, 5], [2, 4, 6])", intersectionArray([1, 3, 5], [2, 6, 5] ), [5] );
test("intersectionArray([10, 20, 4, 45, 99],[3,4,5,6])", intersectionArray([10, 3, 4, 45],[3,4,5,6]), [3,4]);
