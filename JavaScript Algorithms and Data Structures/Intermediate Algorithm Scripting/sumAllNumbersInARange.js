console.time('Execution Time');

function sumAll(arr) {
    //Determine the type of range by using an if-elseif-else statement
    if (arr[0] === arr[1]) {
        return arr[0];
    } else if (arr[0] > arr[1]) {
        let difference = arr[0] - arr[1];
        let newArr = [];
        //push all the numbers within the range to the array
        for (let i = 0; i <= difference; i++) {
            newArr.push(arr[1] + i);
        }
        return newArr.reduce((sum, elem) => sum + elem, 0);
    } else {
        let difference = arr[1] - arr[0];
        let newArr = [];
        //push all the numbers within the range to the array
        for (let i = 0; i <= difference; i++) {
            newArr.push(arr[0] + i);
        }
        return newArr.reduce((sum, elem) => sum + elem, 0);
    }
}


console.log(sumAll([1, 4]));

console.timeEnd('Execution Time');

//Simplest freeCodeCamp solution
// function sumAll(arr) {
//     let sumBetween = 0;
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         sumBetween += i;
//     }
//     return sumBetween;
// }

// console.log(sumAll([1, 4]));
// console.timeEnd('Execution Time');