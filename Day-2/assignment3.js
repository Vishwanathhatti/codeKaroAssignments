function greaterNum(a,b){
	if(a>b){
		console.log(a, ' is greater than ',b);
	}
	else if(a<b){
		console.log(b, ' is greater than ',a);

	}
	else{
		console.log('Both are same numbers');
	}
}
let a=10;
let  b=20;
greaterNum(a,b);

let c=40;
let  d=30;
greaterNum(c,d);

let e=50;
let  f=50;
greaterNum(e,f);