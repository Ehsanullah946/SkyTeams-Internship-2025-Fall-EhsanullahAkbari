// 23. Top K Frequent Elements
// Input: [1,1,1,2,2,3], k=2 → [1,2]


export const frequentNumber = (array,k) => {
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
    }

    let freqArray = [];
    for (let num in obj) {
        freqArray.push({number: parseInt(num), frequency: obj[num]});
    }

    for (let i = 0; i < freqArray.length - 1; i++) {
        for (let j = 0; j < freqArray.length - i - 1; j++) {
            if (freqArray[j].frequency < freqArray[j + 1].frequency) {
                let temp = freqArray[j];
                freqArray[j] = freqArray[j + 1];
                freqArray[j + 1] = temp;
            }
        }
    }
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(freqArray[i].number);
    }
    return result;
}


