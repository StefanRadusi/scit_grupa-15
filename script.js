// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.


function calcNrFromOneTo(number){
    if(number == 0) return 0;
    if(number == 1) return 1;

    let sum = number + calcNrFromOneTo(number - 1);

    return sum;
}

console.log("Recursive", calcNrFromOneTo(4));


// 2. (mandatory) Create a function that calculate the value of n to the m power.


function toThePower(n, m) {    
  if (m == 0) return 1;
  else 
  return n * toThePower(n, m - 1);  
}

console.log("Recursive Power", toThePower(3, 4));


// 3. (optional) Create a function that find the maximum number in a data structure.


const data = {
    a: {
       x: [3, 20, 11],
       y: { 
           z: 9
       }
    },
    b: 0,
    c: 12
  };
  
  const result = Math.min.apply(data);
  console.log(result);