const { factorial } = require("./question-23");
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
test("factorial(3)", factorial(3),6);
test("factorial(2)", factorial(2),2);
test("factorial(5)", factorial(5),120);
test("factorial(4)", factorial(4),24); 
test("factorial(6)", factorial(6), 720); 