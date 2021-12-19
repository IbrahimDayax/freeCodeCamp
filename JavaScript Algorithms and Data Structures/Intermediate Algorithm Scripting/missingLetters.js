function fearNotLetter(str) {
    str = str.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const range = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length - 1]) + 1);
    if (range === str) {
        return undefined;
    } else {
        return str.split('')
            .concat(range.split(''))
            .filter(letter => !str.split('').includes(letter) &&
                range.split('').includes(letter)).join('');
    }
}

console.log(fearNotLetter("abde"));