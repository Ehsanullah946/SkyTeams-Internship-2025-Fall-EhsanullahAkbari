const { add } =require("./question-1")
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
test("add 3+4", add(3, 4), 7);
test("add 0+0", add(0, 0), 0);
test("add 3+0", add(3, 0), 3);
test("add 200+304", add(200, 304), 504);
test("add 0+1", add(0, 1), 1);
