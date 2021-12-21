function sumFibs(num) {
    //this array contains the first 3 members of all fibonacci series
    let fibArr = [0, 1, 1];
    //this function will create a fibonacci series array up to the specified num
    const createFib = num => {
        if (num < 2) {
            return fibArr
        } else {
            for (let i = 2; i <= num; i++) {
                if (i === fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]) {
                    fibArr.push(i)
                }
            }
        }
        return fibArr
    }

    //filter out the negative numbers in the array and add the rest together
    return createFib(num).filter(elem => elem % 2 !== 0).reduce((sum, currentValue) => {
        return sum += currentValue;
    }, 0)
}

console.log(sumFibs(10));