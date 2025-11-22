// Author: Ehsanullah Akbari

// Date: 2025-10-11

// exercise 2 of week-2 finding the simple and compound interest
// example

// input :  p=1000 R=5 T=2
// output:  SI=100 CI=102.50000000000003
export const computeInterest = (P, R, T) => {
    let simple = (P * R * T) / 100;
    let compound = P * ((1 + R / 100) ** T - 1);
    return `SI=${simple} CI=${compound}`;
}