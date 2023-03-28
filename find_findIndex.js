// 1. find()
// 2. findIndex()



/*
let numbers = [3,5,7,56,34,9,8]; 

// using seperate function 
const find_even = (value, index, array) => {
    if(value%2 == 0){
        return value; 
    }
}

let even_number = numbers.find(find_even);
console.log(even_number); 


// using shortly in array function. 
let first_even = numbers.find(x => x%2==0); // find return the first even number. 
console.log(first_even); 
*/



// finding index using findIndex() 
let numbers = [3,5,7,56,34,9,8];

const find_even_number = (value, index, array) => {
    if(value %2 == 0){
        return value; 
    }
}

let first_even = numbers.findIndex(find_even_number); 
console.log(first_even); 



const students = [
    {
        id: 101,
        cgpa: 2.5,
    }, 
    {
        id: 102,
        cgpa: 3.4
    },
    {
        id: 103,
        cgpa: 4.56
    }, 
    {
        id: 104,
        cgpa: 5
    }
]

console.log(students.find(x => x.cgpa>4)); 