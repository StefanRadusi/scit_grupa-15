// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.

// 2. (mandatory) Create a function that calculate the value of n to the m power.

// 3. (optional) Create a function that find the maximum number in a data structure.
// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.

console.log("The sum of numbers");

function SumOfNumbers(n) {
    if (n == 1) return 1;
    return n + SumOfNumbers(n - 1);
}

console.log(SumOfNumbers(10));


// 2. (mandatory) Create a function that calculate the value of n to the m power.

console.log("The value of n");

function pow(n, m) {
    if (m == 1) {
        return n;
    } else {
        return n * pow(n, m - 1);
    }

}

console.log(pow(3, 4));
