

const { matrixZero } = require("./question-25");
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
test("matrixZero([[1,2],[3,4],[5,6],[7,8]])", matrixZero([[1,2],[3,4],[0,6],[7,2]]), [ [ 0, 2 ], [ 0, 4 ], [ 0, 0 ], [ 0, 2 ] ]);
test("matrixZero([[1,2],[3,3],[5,6],[7,8]])", matrixZero([[1,2],[0,3],[5,6],[7,2]]), [ [ 0, 2 ], [ 0, 0 ], [ 0, 6 ], [ 0, 2 ] ] );
test("matrixZero([[1,2],[3,7],[5,6],[7,8]])", matrixZero([[1,2],[3,7],[0,6],[7,2]]), [ [ 0, 2 ], [ 0, 7 ], [ 0, 0 ], [ 0, 2 ] ]);
test("matrixZero([[1,2],[3,8],[5,6],[7,8]])", matrixZero([[1,2],[0,8],[5,6],[7,2]]), [ [ 0, 2 ], [ 0, 0 ], [ 0, 6 ], [ 0, 2 ] ]);
test("matrixZero([[1,2],[3,9],[5,6],[7,8]])", matrixZero([[1,2],[3,9],[5,0],[7,2]]), [ [ 1, 0 ], [ 3, 0 ], [ 0, 0 ], [ 7, 0 ] ]);
