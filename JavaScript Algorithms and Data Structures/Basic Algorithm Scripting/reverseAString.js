function reverseString(str) {
    let rstr = "",
        for (let i = str.length - 1; i >= 0; i--) {
            rstr += str[i];
        }
    return rstr;

    //another simpler way to do the job
    return str.split("").reverse().join("");
}



console.log(reverseString("hello"));