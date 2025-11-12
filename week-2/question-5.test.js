const {computeInterest} = require("./question-5");
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
test("computeInterest(1000,5,2)", computeInterest(1000,5,2),"SI=100 CI=102.50000000000003");
test("computeInterest(1000,4,3)", computeInterest(1000,4,3),"SI=120 CI=124.86400000000009");
test("computeInterest(1000,7,8)", computeInterest(1000,7,8),"SI=560 CI=718.1861798319209");
test("computeInterest(900,5,2)", computeInterest(900,5,2),"SI=90 CI=92.25000000000003");