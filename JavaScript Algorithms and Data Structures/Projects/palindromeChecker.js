//This solution is very efficient and fast becasue it doesn't need to loop 
//over the whole string to determine wether te given string is a palindrome or not

//I used a for loop to loop over the string backwards and forwards simultaneously
//if the string does not match at the two points it's not a palindrome so we break 
//out of the loop and return false

const palindrome = str => {
    let result = true;
    str = str.toLowerCase().split('').filter(elem => !elem.match(/\W|_/));
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        if (str[i] !== str[j]) {
            result = false;
            break;
        }
    }
    return result
}


//This is a much simpler solution but it can be slow for very large texts

// const palindrome = str => {
//     return str.toLowerCase().split('').filter(elem => !elem.match(/\W|_/)).join('') ===
//         str.toLowerCase().split('').reverse().filter(elem => !elem.match(/\W|_/)).join('')
// }


console.log(palindrome(`1 eye for of 1 eye.`));