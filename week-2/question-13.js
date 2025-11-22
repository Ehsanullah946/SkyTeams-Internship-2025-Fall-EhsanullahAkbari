// Author: Ehsanullah Akbari
// Date: 2025-10-12
// exercise 2 of week-2 a month finder
// example
// input :  3
// output: March:28
export const monthFinder = (month) => {
    switch (month) {
        case 1:
            return "Jenuary:30"
        case 2:
            return "fabaruary:29"
        case 3:
            return "March:28"
        case 4:
            return "April:30"
        case 5:
            return "May:30"
        case 6:
            return "Joun:30"
        case 7:
            return "Jouly:30"
        case 8:
            return "Agest:31"
        case 9:
            return "Septamber:30"
        case 10:
            return "October:30"
        case 11:
            return "Novomber:30"
         case 12:
            return "Decomber:30"
        default: 
            return "not defined"
    }
}
