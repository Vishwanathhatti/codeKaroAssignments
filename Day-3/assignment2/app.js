let names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];

let name= document.getElementById('name');
let i=0;
name.innerText=names[i];

function next(){
	if(i=>names.length){
		i=0;
	return name.innerText=names[i];
	}
	else{
	i++;
	return name.innerText=names[i];
}
}

function previous(){
	if(i<=0){
		i=names.length-1;
	return name.innerText=names[i];
	}
	else{
	i--;
	return name.innerText=names[i];
}
}