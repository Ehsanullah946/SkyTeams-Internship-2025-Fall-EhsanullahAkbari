const { compressString } = require("./question-9");
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
test("compressString('eessaan')", compressString("eessaan"),"e2s2a2n1");
test("compressString('aliike')", compressString('aliike'),"a1l1i2k1e1");
test("compressString('aaccceee')", compressString('aaccceee'),"a2c3e3");
test("compressString('ffgglll')", compressString('ffgglll'),"f2g2l3");