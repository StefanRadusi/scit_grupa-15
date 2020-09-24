// 1.Create a function that calculate a the sum of numbers from 1 to N.
function calcNrFromOneTo(Number) {
  if (Number <= 0) return 0;
  if (Number === 1) return 1;
  return Number + calcNrFromOneTo(Number - 1);
  
}
console.log(calcNrFromOneTo(4));

// 2. Create a function that calculate the value of n to the m power.
function toThePower(Base,Exponential) {
  if (Base === 0) return 0;
  if (Exponential === 0) return 1
  return Base * toThePower(Base, Exponential - 1);
}
console.log(toThePower(3,4));