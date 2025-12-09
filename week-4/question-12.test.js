const { characterFrequency } = require("./question-12");
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
test("characterFrequency('Ehsan')", characterFrequency("Ehsan"),{E:1, h:1, s:1 ,a:1,n:1});
test("characterFrequency('alilike')", characterFrequency('alilike'),{a:1,l:2,i:2,k:1,e:1});
test("characterFrequency('catfar')", characterFrequency('catfar'),{c:1,a:2,t:1,f:1,r:1});
test("characterFrequency('banana')", characterFrequency('banana'),{b:1,a:3,n:2});