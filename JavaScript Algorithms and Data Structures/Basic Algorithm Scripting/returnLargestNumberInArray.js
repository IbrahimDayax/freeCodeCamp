function largestOfFour(arr) {
    let length = arr.length;
    let maxArray = [];

    for (let i = 0; i < length; i++) {
        maxArray.push(arr[i].sort((a, b) => b - a)[0]);
    }

    return maxArray;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));