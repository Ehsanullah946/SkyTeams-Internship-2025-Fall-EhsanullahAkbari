
const { matrixMultiplication } = require("./question-16");
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
test("matrixMultiplication([[1,2],[3,4]] x [[5,6],[7,8]])", matrixMultiplication([[1,2],[3,4]] ,[[5,6],[7,2]]),[ [ 19, 10 ], [ 43, 26 ]]);
test("matrixMultiplication([[1,2],[3,3]] x [[5,6],[7,8]])", matrixMultiplication([[1,2],[3,3]] , [[5,6],[7,2]]), [ [ 19, 10 ], [ 36, 24 ] ] );
test("matrixMultiplication([[1,2],[3,7]] x [[5,6],[7,8]])", matrixMultiplication([[1,2],[3,7]] , [[5,6],[7,2]]), [ [ 19, 10 ], [ 64, 32 ] ]);
test("matrixMultiplication([[1,2],[3,8]] x [[5,6],[7,8]])", matrixMultiplication([[1,2],[3,8]] , [[5,6],[7,2]]), [ [ 19, 10 ], [ 71, 34 ] ]);
test("matrixMultiplication([[1,2],[3,9]] x [[5,6],[7,8]])", matrixMultiplication([[1,2],[3,9]] , [[5,6],[7,2]]), [ [ 19, 10 ], [ 78, 36 ] ]);
