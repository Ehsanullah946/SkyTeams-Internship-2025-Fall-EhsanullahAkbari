const { findMax } =require("./question-3")
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

test("findMax([1,2,3,4,5])", findMax([1,2,3,4,5]),5);
test("findMax([2,4,6])", findMax([2,4,6]), 6);
test("findMax([1,2,3,4,5])", findMax([1,2,7,4,0]), 7);
test("findMax([1,3,5])", findMax([1,3,50]), 50);
test("findMax([1,3,5])", findMax([1,3,-50]), 3);
test("findMax([])", findMax([]), 0);