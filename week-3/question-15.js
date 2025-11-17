// Author: Ehsanullah Akbari

// Date: 2025-10-16

// exercise 15  Find the armSrtrong  number
// example

// input :  153;
// output: true;

export const checkArmstrong = (number) => {
    let count = 0 , act=number, result=0, isArmstrong=false;
    let eachDigit = []; 
    while (number > 0) {
        eachDigit.push(number % 10);
        number = Math.floor(number / 10)
        count++;
    }
    for (let i = 0; i < eachDigit.length; i++){
        result += eachDigit[i] ** count;
    }
    if (result === act) {
        return isArmstrong = true;

    } else {
        return isArmstrong = false;
     }
}



