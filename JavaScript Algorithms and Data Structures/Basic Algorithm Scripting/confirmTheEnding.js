function confirmEnding(str, target) {
    str = str.split('');
    target = target.split('');

    const lengthOfTarget = target.length;
    const lengthOfStr = str.length;
    let startIndex = lengthOfStr - lengthOfTarget;
    let endOfStr = [];

    for (let i = startIndex; i < lengthOfStr; i++) {
        endOfStr.push(str[i]);
    }

    target = target.join('');
    endOfStr = endOfStr.join('');

    return (endOfStr == target);
}

console.log(confirmEnding("Open sesame", "same"));