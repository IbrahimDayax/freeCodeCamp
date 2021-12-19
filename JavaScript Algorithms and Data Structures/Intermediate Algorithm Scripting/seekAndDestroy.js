function destroyer(arr, ...args) {
    return arr.filter(elem => !args.includes(elem));
}



console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));