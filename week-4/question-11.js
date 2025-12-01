
// Author: Ehsanullah Akbari
// Date: 2025-11-30
// exercise 11 of week-4  Description: Check if one string is rotation of another. 
// Example: 
// "waterbottle", "erbottlewat" → True

export const isRotateString = (string1,string2,k) => {
    let result = '';
    for (let i =  k; i < string1.length; i++){
            result += string1[i];
    }
    console.log(result);
    for (let i = 0; i < k; i++){
            result += string1[i];
    }
    console.log(result)

    if (result !== string2) {
        return false;
    }

    return true;
}
