// https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
export default gcd;