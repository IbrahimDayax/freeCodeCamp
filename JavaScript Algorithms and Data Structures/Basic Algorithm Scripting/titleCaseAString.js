function titleCase(str) {
    str = str.split(' ');
    let upperCaseStr = [];
    let titleCaseStr = "";
    const strLength = str.length;

    //capitalize the entire string
    for (let i = 0; i < strLength; i++) {
        upperCaseStr.push(str[i].toUpperCase());
    }

    //uncapitalize all the letters of each word except the first letter of each word
    for (let i = 0; i < strLength; i++) {
        titleCaseStr += upperCaseStr[i][0];

        for (let j = 1; j < upperCaseStr[i].length; j++) {
            titleCaseStr += upperCaseStr[i][j].toLowerCase();
        }
        //add a space at the end of each word
        titleCaseStr += " ";
    }

    return titleCaseStr;
}


//Simplest freeCodeCamp solution
// function titleCase(str) {
//     return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));