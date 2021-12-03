function bouncer(arr) {
    const arrLength = arr.length;
    let newArr = [];
    for (let i = 0; i < arrLength; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

//shortest freeCodeCamp solution
// function bouncer(arr) {
//     return arr.filter(Boolean);
// }

console.log(bouncer([7, "ate", "", false, 9]));