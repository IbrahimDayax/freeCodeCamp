console.time("ET");


function sumPrimes(num) {
    // Prime number sieve
    let isPrime = new Array(num + 1).fill(true);
    // 0 and 1 are not prime
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (isPrime[i]) {
            // i has not been marked false -- it is prime
            for (let j = i * i; j <= num; j += i)
                isPrime[j] = false;
        }
    }

    // Sum all values still marked prime
    return isPrime.reduce(
        (sum, prime, index) => prime ? sum + index : sum
    );
}

console.log(sumPrimes(9999999));
console.timeEnd("ET");