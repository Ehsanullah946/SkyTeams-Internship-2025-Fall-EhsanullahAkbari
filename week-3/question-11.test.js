const { printPrime } = require("./question-11");
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
test("printPrime(5)", printPrime(5),[2,3,5]);
test("printPrime(10)", printPrime(10),[2,3,5,7]);
test("printPrime(20)", printPrime(20),[2,3,5,7,11,13,17,19]);
test("printPrime(7)", printPrime(7), [2,3,5,7]); 