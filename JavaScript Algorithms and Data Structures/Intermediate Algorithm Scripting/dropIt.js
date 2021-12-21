function dropElements(arr, func) {
    return arr.length > 0 && !func(arr[0]) ?
        (dropElements(arr.slice(1), func)) :
        arr;
}

console.log(dropElements([1, 2, 3, -2], function(n) { return n < 0 }))