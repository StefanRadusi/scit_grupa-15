// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.
function sumCalculator(n) {
    if (n==1) return 1;
    return n + sumCalculator(n - 1);
}

console.log(sumCalculator(74))
console.log(sumCalculator(131))
console.log(sumCalculator(444))
// 2. (mandatory) Create a function that calculate the value of n to the m power.

const power = function (n, m) {
    if (m===0) {
        return 1;
    } else {
        return n * power(n, m-1);
    }
};

console.log(power(4, 2));
console.log(power(2, 0));
console.log(power(6, 6));
// 3. (optional) Create a function that find the maximum number in a data structure.
