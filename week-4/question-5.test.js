const { rearrangeArray } = require("./question-5");
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
test("rearrangeArray([1,2,4,5,10])", rearrangeArray([1,2,4,5,10],),[2, 4, 10, 1, 5]);
test("rearrangeArray([1, 3, 5])", rearrangeArray([1, 3, 5] ), [ 1, 3, 5] );
test("rearrangeArray([10, 3, 4, 45])", rearrangeArray([10, 3, 4, 45]), [ 10, 4, 3, 45]);
test("rearrangeArray([5,6,7,8])", rearrangeArray([5,6,7,8]), [6,8,5,7]);
