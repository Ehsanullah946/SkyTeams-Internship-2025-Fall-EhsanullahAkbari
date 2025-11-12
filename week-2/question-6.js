
// Author: Ehsanullah Akbari

// Date: 2025-10-11

// exercise 2 of week-2 format second to h,m,s 
// example

// input :  3600
// output:  1 h, 0 m, 0 s
export const formatSecond = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours} h, ${minutes} m, ${seconds} s`
}