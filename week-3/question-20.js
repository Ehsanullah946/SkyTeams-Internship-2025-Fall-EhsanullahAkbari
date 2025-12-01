// Author: Ehsanullah Akbari

// Date: 2025-10-15

// exercise 20 of week-3  Body Mass Index (BMI) Calculator
// example
// input :  70,1.75
// output:  22.9(Normal weight)


export const BMICalculate = (weight, height) => {
    let BMI = Number((weight / (height * height)).toFixed(1));
    if (BMI < 18.5) {
        return `${BMI}(Underweight)`
    } else if (BMI >= 18.5 && BMI < 25) {
        return `${BMI}(Normal weight)`
    } else if ( BMI > 25 && BMI < 30 ) {
        return `${BMI}(Overweight:)`
    } else if( BMI > 30 ){
        return `${BMI}(Obase:)`  
    }
}
console.log(BMICalculate(70,1.75))
console.log(BMICalculate(70,1.70))
console.log(BMICalculate(80,1.75))
console.log(BMICalculate(100,1.60))
console.log(BMICalculate(105,1.75))