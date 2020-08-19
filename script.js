
//1. (mandatory) Create a function that calculate  the sum of numbers from 1 to N.


  export function CalculateSum(number){
    if (number < 1) return 0;

   return number+CalculateSum(number-1);
}

console.log(CalculateSum(9))
console.log(CalculateSum(5))


export function CalcPower(a,b){


    if(b===0) return 1;

    return a*CalcPower(a,b-1);


}

console.log(CalcPower(2,3))
console.log(CalcPower(3,3))
console.log(CalcPower(6,2))



