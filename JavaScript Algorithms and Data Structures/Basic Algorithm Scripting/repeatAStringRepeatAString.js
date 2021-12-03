function repeatStringNumTimes(str, num) {
    let repeatedStr = [];

    for (let i = 0; i < num; i++) {
        repeatedStr.push(str);
    }

    repeatedStr = repeatedStr.join('');

    return repeatedStr;
}

console.log(repeatStringNumTimes("abc", 3));