// Assignment 10

function multiplication(num) {
  
  if (num <= 0 ) {
    console.log("Please provide a positive integer.");
    return;
  }

  console.log(`Multiplication table for ${num} up to 10:`);
  
  for (let i = 1; i <= 10; i++) {
     result = num * i;
    console.log(num,' * ', i,' = ', result);
  }
}

let number = 23;
multiplication(number);
