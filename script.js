// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.

function sumOfRecursive(number) {
    if (number === 0) return 0;
    let acc = number + sumOfRecursive(number - 1);

    return acc;
}
console.log("recursive", sumOfRecursive(5));


// 2. (mandatory) Create a function that calculate the value of n to the m power.
function power(n, m) {
    if (n === 0) return null;
    if (m === 0) return 1;

    return n * power(n, m - 1);

}
console.log(power(2, 3));

// 3. (optional) Create a function that find the maximum number in a data structure.
