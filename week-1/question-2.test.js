// Author: Ehsanullah Akbari
// Date: 2025-10-11
// example 2 reverse string

// example
// input : test 
// output: tset


const { reversString } = require("./question-2")
const test = (name, actual, expect) => {
    const passed = JSON.stringify(actual) === JSON.stringify(expect);
    if (passed) {
        console.log( `${name} passed`);
    } else {
        console.log(`${name} faild`);
        console.log("actual", actual);
        console.log("actual", expect);
    }
}
test("reversString Ehsan ", reversString("Ehsan"), "nashE");
test("reversString kabul", reversString("kabul"), "lubak");
test("reversString Ali", reversString("Ali"), "ilA");
test("reversString Ahmad", reversString("Ahmad"), "damhA");
test("reversString call", reversString("call"), "llac");