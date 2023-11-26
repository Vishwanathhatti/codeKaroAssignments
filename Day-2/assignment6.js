//Assignment 6
function calculate(num1, num2, operator) {
  if (operator === '+') {
    return console.log(num1 + num2);
  } else if (operator === '-') {
    return console.log(num1 - num2);
  } else if (operator === '*') {
    return console.log(num1 * num2);
  } else if (operator === '/') {
    
    if (num2 !== 0) {
      return console.log(num1 / num2);
    } else {
      return "Error: Division by zero";
    }
  } 
  else {
    return "Error: Invalid operator";
  }

}

let num1=15;
let num2=21;
let operator1='+';

calculate(num1,num2,operator1);

let num3=21;
let num4=15;
let operator2='-';

calculate(num3,num4,operator2);

let num5=3;
let num6=3;
let operator3='*';

calculate(num5,num6,operator3);

let num7=21;
let num8=7;
let operator4='/';

calculate(num7,num8,operator4);