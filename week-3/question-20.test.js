const { BMICalculate } = require("./question-20");
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

test("BMICalculate(70,1.75)", BMICalculate(70,1.75),"622.9(Normal weight)");
test("BMICalculate(70,1.70)", BMICalculate(70,1.70),"24.2(Normal weight)");
test("BMICalculate(80,1.75)", BMICalculate(80,1.75),"26.1(Overweight:)");
test("BMICalculate(100,1.60)", BMICalculate(100,1.60),"39.1(Obase:)"); 
test("BMICalculate(105,1.75)", BMICalculate(105,1.75),"34.3(Obase:)"); 


