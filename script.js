// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.

function CalculateSum(Number) {

  if (Number <= 0) return 0;
  if (Number === 1) return 1;

  return Number + CalculateSum(Number - 1);
  
}

console.log(CalculateSum(0));
console.log(CalculateSum(1));
console.log(CalculateSum(4));


// 2. (mandatory) Create a function that calculate the value of n to the m power.

function CalculateExponential(Base,Exponential) {

  if (Base === 0) return 0;
  if (Exponential === 0) return 1

  return Base * CalculateExponential(Base, Exponential - 1);
  
}

console.log(CalculateExponential(0,5));
console.log(CalculateExponential(5,0));
console.log(CalculateExponential(4,2));
console.log(CalculateExponential(3,4));

// 3. (optional) Create a function that find the maximum number in a data structure.

const data = {
  a: {
     x: [3, 20, 11],
     y: { 
         z: 9
     }
  },
  b: 21,
  c: 12
}

function FindMaximumNumber(maxNumber, data,parent) {
  if (typeof data === "object" && data !== null) {
    for (const key of Object.keys(data)) {
      const obj = data[key];
      console.log(obj);
      if (typeof obj === 'number') {
       let minNumber = obj;
        if (minNumber > maxNumber) {
          maxNumber = minNumber;
          // console.log(maxNumber);
        }
      }
      const result = FindMaximumNumber(maxNumber,obj,data);
      if (typeof result === 'number' && result !== null) return result;
    }
  }
//   if (typeof data === 'number' && data < maxNumber ) {
//     console.log('iasa');
//     return maxNumber;
//   }else{
//     return null;
//   }
}

console.log(FindMaximumNumber(maxNumber = 0, data));