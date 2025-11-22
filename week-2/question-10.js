// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 finding the leap year
// example
// input :  2000
// output:  leap year
export const leapYear = (year) => {
    if ((!(year % 100 === 0) || (year % 400===0 && year % 100===0)) && (year % 4===0)) {
         return "Leap year"
    } else {
        return "not leap year"
    }
}
