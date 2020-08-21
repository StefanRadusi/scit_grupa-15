// 1. (mandatory) Create a function that calculate a the sum of numbers from 1 to N.
function sum(N) {
    if (N < 1) return 0;    
    return N  + sum(N - 1); 
  }
  
  console.log(sum(3));
  console.log(sum(8));
  
  // 2. (mandatory) Create a function that calculate the value of n to the m power.
  function power(base, exp) {
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp - 1);
  
  }
  console.log(power(3,4))
  console.log(power(8,7))

// 3. (optional) Create a function that find the maximum number in a data structure.
function findax() { 
    array = [60, 20, 10];  
    maxValue = -Infinity; 

    for (item of array) { 
         
        if (item > maxValue) 
            maxValue = item; 
    } 
    document.querySelector( 
      '.max').textContent = maxValue; 
} 
