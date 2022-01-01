//This algorithm is a simple ROT13 cipher decoder
const rot13 = str => {
    const first = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    const second = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += first.indexOf(str[i]) >= 0 ? second[first.indexOf(str[i])] :
            second.indexOf(str[i]) >= 0 ? first[second.indexOf(str[i])] : str[i];
    }

    return result
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));