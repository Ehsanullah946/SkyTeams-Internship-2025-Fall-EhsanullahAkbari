export const reverseNumber = (number) => {
    let revers = 0;
    while (number > 0) {
         revers = revers * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    return revers;
}
