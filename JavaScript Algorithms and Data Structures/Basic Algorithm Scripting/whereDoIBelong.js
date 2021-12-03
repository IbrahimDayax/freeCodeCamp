function getIndexToIns(arr, num) {
    arr.sort((a, b) => b - a);

    return arr;
}


console.log(getIndexToIns([40, 60], 50));