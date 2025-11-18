const { decimalToBinary } = require("./question-26");
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
test("decimalToBinary(10)", decimalToBinary(10),"1010");
test("decimalToBinary(20)", decimalToBinary(20),"10100");
test("decimalToBinary(23)", decimalToBinary(23),"10111");
test("decimalToBinary(32)", decimalToBinary(32),"100000"); 
test("decimalToBinary(22)", decimalToBinary(22), "10110"); 