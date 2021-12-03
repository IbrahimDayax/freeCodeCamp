function findElement(arr, func) {
    const arrLength = arr.length;
    let noElementPassed = true;

    for (let i = 0; i < arrLength; i++) {
        if (func(arr[i]) == true) {
            noElementPassed = false;
            return arr[i];
        }
    }

    if (noElementPassed) {
        return undefined;
    }

}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));