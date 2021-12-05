// console.time("Execution Time");

// function mutation(arr) {
//     const str1 = arr[0].toLowerCase();
//     const str2 = arr[1].toLowerCase();
//     const str2Length = str2.length;
//     let result = false;

//     for (let i = 0; i < str2Length; i++) {
//         if (str1.includes(str2[i]) == true || str1.includes(str2[i] == true)) {
//             result = true;
//         } else {
//             return false;
//         }
//     }
//     return result;
// }

//shortest solution
console.timeEnd("Execution Time");


function mutation(arr) {
    return arr[1].toLowerCase().split("").every(letter => {
        return arr[0].toLowerCase().includes(letter);
    });
}

console.timeEnd("Execution Time");

console.log(mutation(["Mary", "Aarmy"]));