function getIndexToIns(arr, num) {
    const arrLength = arr.length;
    if (arrLength == 0) {
        return 0;
    }
    arr.sort((a, b) => a - b);
    if (num <= arr[0]) {
        return 0;
    }
    if (num >= arr[arrLength - 1]) {
        return arrLength;
    }
    for (let i = 0; i < arrLength; i++) {
        if (num <= arr[i]) {
            return i;
        }
    }
}
console.log(getIndexToIns([40, 60], 50));