// spread operator 

function add_number(x, y, z){
    return x+y+z
}

let numbers = [1,2,3]; 
console.log(add_number(...numbers)); 

let numbers2 = [2,4,6,8, ...numbers]; 
console.log(numbers2); 

let numbers3 = [2,4, ...numbers,6,8]; 
console.log(numbers3);


let numbers4 = numbers2.concat(numbers3)
console.log(numbers4); 

let numbers5 = [...numbers2, ...numbers3]; 
console.log(numbers5); 



let p1 = {
    name: "Hasan", 
    age: 30
}

let p2 = {
    nationality: "Bangladesh", 
    occupation: "Job"
}

let p = {...p1, ...p2}; 
console.log(p); 
