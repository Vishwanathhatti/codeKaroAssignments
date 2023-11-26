// Assignment 2
function fact(integer){
	if(integer<0){
		console.log("Please provide a positive integer");
		return ;
	}
	let factorial=1;
	for(let i=1;i<=integer;i++){
		factorial *=i;
	}
	console.log("The factorial of ",integer,"is ",factorial);
}
let number=-1;
fact(number);
let num=5;
fact(num);