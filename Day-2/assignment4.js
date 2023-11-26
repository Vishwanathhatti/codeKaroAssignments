// Assignment 5
function primeNum(num){
	if (num <0){
		return console.log("Enter a positive number");
	}
	if(num<=1){
		return console.log("Number is less than 2");
	}

 function primeNum(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (primeNum(i)) {
      console.log(i);
    }
  }
}
let number=13;
primeNum(number)