// https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
import gcd from "./gcd.mjs";
const lcm = (a, b) => a * b / gcd(a, b);

console.log(lcm(12, 6))