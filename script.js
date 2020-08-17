// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.
function Calculate(n){
    if (n === 0) return 0;
    let sum = 1;
    for(let i=1; i < n; i++){
      sum = sum + (i+1);
    }
    return sum;
  } 
  console.log(Calculate(7));
  console.log(Calculate(9));

// 2. (mandatory) Create a function that calculate the value of n to the m power.
function power(base, exp) {
  if(exp === 0){
      return 1;
  }
  return base * power(base, exp - 1);

}
console.log(power(3,4))
console.log(power(8,7))
 


