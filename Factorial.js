// recursion
const factorial = n => {
    if (n < 2) return n;
    return n * factorial(n - 1);
}

module.exports = { factorial };