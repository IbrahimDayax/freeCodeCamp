function spinalCase(str) {
    const regex = /\s+|_+/g;
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(regex, "-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));