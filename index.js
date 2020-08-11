console.log("start");
import { generateLetters } from "./generateLetters";
import { getDataAtLetter } from "./fetchDataAtLetter";

// how to calc  N! with for loop
// ex: 4! -> 1 * 2 * 3 * 4 -> 24

function factorialOf(number) {
  if (number === 0) return 0;

  let acc = 1;
  for (let i = 0; i < number; i++) {
    acc = acc * (i + 1);
  }

  return acc;
}

// console.log(factorialOf(4));
// console.log(factorialOf(5));
// console.log(factorialOf(0));
// console.log(factorialOf(1));

// a recursive function is a faction that calls it self

function factorialOfRecursive(number) {
  // console.log("inn");
  if (number === 0) return 0;
  if (number === 1) return 1;

  let acc = number * factorialOfRecursive(number - 1);

  return acc;
}

console.log("recursive", factorialOfRecursive(4));

// 1. factorialOfRecursive(4)
// -- number -> 4
// acc = 4 *
//    2. factorialOfRecursive(3)
//    -- number -> 3
//    acc = 3 *
//        3.  factorialOfRecursive(2)
//        -- number -> 2
//        acc = 2 * factorialOfRecursive(1)
//          4. number -> 1
//          -> return 1
//        3. return 2
//     2. return 6
// 1. return 24;

const letters = generateLetters();
// console.log(letters);
letters[1].style.color = "red";

getDataAtLetter(letters);
