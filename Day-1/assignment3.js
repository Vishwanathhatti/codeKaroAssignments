//Assignment 3


let cars=[];
cars.push({make:"Toyota", model:"Camry", year:2018});
cars.push({make:"Nissan", model:"Skyline", year:2010});
cars.push({make:"Lamborgini",model:"Gallardo", year:2007});
console.log(cars);
cars.splice(0,1,{make:"Honda", model:"Civic", year:2020});
console.log(cars);
cars[1].model="Accord";
console.log(cars);
