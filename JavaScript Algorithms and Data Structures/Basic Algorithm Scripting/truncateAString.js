function truncateString(str, num) {
    let tStr = "";
    if (str.length <= num) {
        return str;
    } else {
        for (let i = 0; i < num; i++) {
            tStr += str[i];
        }
        tStr += "...";
        return tStr;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));