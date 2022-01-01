const convertToRoman = num => {
    let str = "" + num;

    let onesPlace;
    let tensPlace;
    let hundredsPlace;
    let thousandsPlace;

    if (str.length <= 0) {
        return "no input"
    } else {

        onesPlace = str[str.length - 1] == 1 ? "I" : str[str.length - 1] == 2 ? "II" :
            str[str.length - 1] == 3 ? "III" : str[str.length - 1] == 4 ? "IV" :
            str[str.length - 1] == 5 ? "V" : str[str.length - 1] == 6 ? "VI" :
            str[str.length - 1] == 7 ? "VII" : str[str.length - 1] == 8 ? "VIII" :
            str[str.length - 1] == 9 ? "IX" : "";

        tensPlace = str[str.length - 2] == 1 ? "X" : str[str.length - 2] == 2 ? "XX" :
            str[str.length - 2] == 3 ? "XXX" : str[str.length - 2] == 4 ? "XL" :
            str[str.length - 2] == 5 ? "L" : str[str.length - 2] == 6 ? "LX" :
            str[str.length - 2] == 7 ? "LXX" : str[str.length - 2] == 8 ? "LXXX" :
            str[str.length - 2] == 9 ? "XC" : "";

        hundredsPlace = str[str.length - 3] == 1 ? "C" : str[str.length - 3] == 2 ? "CC" :
            str[str.length - 3] == 3 ? "CCC" : str[str.length - 3] == 4 ? "CD" :
            str[str.length - 3] == 5 ? "D" : str[str.length - 3] == 6 ? "DC" :
            str[str.length - 3] == 7 ? "DCC" : str[str.length - 3] == 8 ? "DCCC" :
            str[str.length - 3] == 9 ? "CM" : "";

        thousandsPlace = str[str.length - 4] == 1 ? "M" : str[str.length - 4] == 2 ? "MM" :
            str[str.length - 4] == 3 ? "MMM" : "";
    }

    return thousandsPlace + hundredsPlace + tensPlace + onesPlace
}

console.log(convertToRoman(0));