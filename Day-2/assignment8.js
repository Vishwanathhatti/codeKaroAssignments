// Assignment 8

function perfectNum(num){
	if (num<1){
		return console.log("Is not a perfect Number");
	}
	  let sum = 1;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num){
  	return console.log(num, "Is a Perfect Number");
  }
  else{
  	return console.log(num,"Is not a Perfect Number");
  }
}

let num1= 28;
perfectNum(num1);

let num2=13;
perfectNum(num2);