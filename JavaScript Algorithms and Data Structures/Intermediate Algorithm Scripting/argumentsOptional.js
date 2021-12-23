const addTogether = (x, y) => typeof x == "number" && typeof y == "number" ? x + y :
    typeof x == "number" && typeof y == "undefined" ? y => typeof y == "number" ? x + y :
    undefined : undefined;
console.log(addTogether(2)([3]));