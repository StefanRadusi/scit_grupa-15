console.log("start");

console.log(a);
// var is hoisted
var a = 1;

// console.log(b);
let b = 5;

printFunction();
// functions are hoisted
function printFunction() {
  console.log("this is the function");
}
