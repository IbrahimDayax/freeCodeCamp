//This solution is very efficient and fast becasue it doesn't need to loop 
//over the whole string to determine wether the given string is a palindrome or not


const palindrome = str => {
    let result = true;
    //convert the string to lowerCase and remove all non alphanumeric characters including _
    str = str.toLowerCase().split('').filter(elem => !elem.match(/\W|_/));
    //I used a for loop to loop over the string backwards and forwards simultaneously
    for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
        //if the string does not match at the two points it's not a palindrome so we break 
        //out of the loop and return false
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