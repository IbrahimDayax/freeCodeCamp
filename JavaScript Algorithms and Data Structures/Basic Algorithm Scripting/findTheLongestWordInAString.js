function findLongestWordLength(str) {
    //declare and intitialize all the necessary variables
    let words = [];
    let word = "";
    let longest = 0;

    for (let i = 0; i < str.length; i++) {
        //push the words into the array by detecting the whitespace at the end of each word
        if (str[i] !== " ") {
            word += str[i];
        } else {
            words.push(word);
            word = "";
        }

        //push the last word into the array
        if (i == str.length - 1) {
            words.push(word);
        }
    }

    //find the longest word in the array
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }

    return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));