//  20. Check Balanced Parentheses  
// Input: "{[()]}" → Output: Balanced


export const balancedParanthesis = (str) => {
    let obj = {
        "{": 1,
        "}": 1,
        "(": 2,
        ")": 2,
        "[": 3,
        "]": 3,
    }
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
        if(obj[str[start]] !== obj[str[end]]) {
            return false;
        }
        start += 1;
        end -= 1;
    }

    return true;
}


