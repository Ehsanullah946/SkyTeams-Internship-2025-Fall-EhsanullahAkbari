const { frequentNumber } = require("./question-23");
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
test("frequentNumber([1,2,2,4,4,5,10],2)", frequentNumber([1,2,2,4,4,5,10],2),[2,4]);
test("frequentNumber([1,1,2,3,4,6],1)", frequentNumber([1,1,2,3,4,6],1),[1]);
test("frequentNumber([1,3,2],2)", frequentNumber([1,3,2],2),[1,2]);
test("frequentNumber([1,2,3,5,6,10,15],3)", frequentNumber([1,2,3,3,5,6,3,15],3),[3,1,2]);