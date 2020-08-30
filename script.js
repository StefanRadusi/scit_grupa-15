// 1.(mandatory) Create a function that calculate a the sum of numbers from 1 to N.


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

// // 3. (optional) Create a function that find the maximum number in a data structure.
// const beta = {
//     a: {
//         x: [3, 20, 11],
//         y: {
//             z: 9
//         }
//     },
//     b: 0,
//     c: 12
// }

// function findMax(data, max, parent) {
//     if (typeof data === "object" && data !== null) {
//         for (const key of Object.keys(data)) {
//             const obj = data[key];
//             const result = findMax(obj, max, data);
//             if (result !== null) return result;
//         }
//     }
//     max = data[key[1]];
//     if (typeof data === 'number') {
//         if (data < max) return max;
//     } else {
//         max = data;

//     } return null;
// }

// console.log(findMax(beta, 6));



