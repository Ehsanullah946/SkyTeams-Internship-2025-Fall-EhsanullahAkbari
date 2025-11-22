
// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 determine the Grade of student
// example
// input :  4
// output:  Even
export const studentGradeCatagory = (mark) => {
    if (mark >= 90 && mark <= 100) {
        return "Grade:A";
    } else if (mark >= 80 && mark < 90) {
        return "Grade:B"
    } else if (mark >= 70 && mark < 80) {
        return "Grade:C";
    } else if (mark >= 60 && mark < 70) {
        return "Grade:D"
    } else if (mark >= 50 && mark < 60) {
        return "Grade:E"
    } else {
        return "Grade:F"
    }
}