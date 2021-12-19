function pairElement(str) {
    return str.toUpperCase().split('').map(letter =>
        letter === 'A' ? [letter, 'T'] :
        letter === 'T' ? [letter, 'A'] :
        letter === 'C' ? [letter, 'G'] :
        letter === 'G' ? [letter, 'C'] :
        "incorrect input");
}

console.log(pairElement("GCG"));