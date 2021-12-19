function myReplace(str, before, after) {
    if (before[0].match(/[A-Z]/)) {
        return str.replace(before, after.replace(after[0], after[0].toUpperCase()));
    } else if (!before[0].match(/[A-Z]/)) {
        return str.replace(before, after.replace(after[0], after[0].toLowerCase()));
    } else {
        return str.replace(before, after);
    }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));