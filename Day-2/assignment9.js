
// Assignment 9
function fibonacciSeries(n) {  
  if (n <= 0 ) {
    console.log("Please provide a positive integer.");
    return;
  }

  let fibArray = [0, 1];

  for (let i = 2; fibArray[i - 1] + fibArray[i - 2] <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }  
  console.log("Fibonacci series up to", n, ":");
  console.log(fibArray.join(", "));
}

let num = 30;
fibonacciSeries(num);
