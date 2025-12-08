// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 a month finder
// example
// input :  3
// output: March:28

export const monthFinder = (number) => {
    switch (number) {
        case 1:
            return "January:31";
        case 2:
            return "February:28";       
        case 3: 
            return "March:31";
        case 4:
            return "April:30";  
        case 5:
            return "May:31";
        case 6:
            return "June:30";
        case 7:
            return "July:31";
        case 8: 
            return "August:31";
        case 9:
            return "September:30";
        case 10:
            return "October:31";
        case 11:
            return "November:30";   
        case 12:
            return "December:31";
        default:
            return "Invalid month number";
    }   
}
