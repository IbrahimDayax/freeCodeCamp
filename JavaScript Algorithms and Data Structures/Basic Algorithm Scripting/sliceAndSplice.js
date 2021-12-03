//longer solution that uses no special methods
// console.time('Execution Time');

// function frankenSplice(arr1, arr2, n) {
//     let newArr = [];
//     const arr1Length = arr1.length;
//     const arr2Length = arr2.length;

//     //if n is 0, create a new array composed of both arr1 and arr2 in order
//     if (n === 0) {
//         for (let i = 0; i < arr1Length; i++) {
//             newArr.push(arr1[i]);
//         }
//         for (let i = 0; i < arr2Length; i++) {
//             newArr.push(arr2[i]);
//         }
//     }
//     // if n is not zero make the new array depending on the value of n
//     if (n > 0) {
//         //push the part of arr2 that comes before n in the new array
//         for (let i = 0; i < n; i++) {
//             newArr.push(arr2[i]);
//         }
//         //then push all of arr1 in the new array
//         for (let i = 0; i < arr1Length; i++) {
//             newArr.push(arr1[i]);
//         }
//         //finally push the remaining part of arr2 in the new array if it exists
//         if (arr2Length > n) {
//             for (let i = n; i < arr2Length; i++) {
//                 newArr.push(arr2[i]);
//             }
//         }
//     }

//     return newArr;
// }
// console.timeEnd('Execution Time');


// //shortest solution
// console.time('Execution Time');

function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2];
    newArr.splice(n, 0, ...arr1);
    return newArr;
}
// console.timeEnd('Execution Time');

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));