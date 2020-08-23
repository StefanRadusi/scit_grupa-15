
//Create a function that calculate a the sum of numbers from 1 to N

function sumCalculator(n) {
    if (n == 1) return 1;
    return n + sumCalculator(n - 1);
}

console.log(sumCalculator(110));
console.log(sumCalculator(131));
console.log(sumCalculator(253));
console.log(sumCalculator(342));
console.log(sumCalculator(463));


//Create a function that calculate the value of n to the m power

const power = function (a, n) {
    if (n === 0) {
        return 1;
    } else {
        return a * power(a, n - 1);
    }
};

console.log(power(4, 2));
console.log(power(5, 3));
console.log(power(6, 5));
console.log(power(7, 6));