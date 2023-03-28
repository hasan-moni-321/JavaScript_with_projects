/*
let numbers = [10, 20, 30, 40, 50]; 
let [num1, num2, num3, num4, num5] = numbers; 
console.log(num1)
console.log(num2)
*/ 

/*
let numbers = [10, 20, 30, 40, 50]; 
var [num1, num2, ...z] = numbers; 
console.log(num1); 
console.log(num2); 
console.log(z)
*/ 

/*
let a = 10, b=20;
[a, b] = [b, a]
console.log(a); 
console.log(b);
*/ 


/*
// Object destructuring 
const student_info = {
    id: 101,
    full_name: 'Hasan Moni',
    gpa: 3.46
}

console.log(student_info); 
console.log(student_info.id); 
console.log(student_info.full_name); 
console.log(student_info.gpa); 


const {id, full_name} = student_info
console.log(id);
console.log(full_name); 
*/ 


/*
// destructuring in object with multiple object. 
const info = {
    id: 101,
    full_name: "Hasan Moni", 
    gpa: 3.56,
    language: {
        native: 'bengali',
        beginner: 'english',
    }
}

const {full_name, id, language} = info
console.log(id, full_name); 
console.log(language); 
console.log(language.native)
*/ 



// destructuring function parameter

const student_info = (id, full_name) => {
    console.log(id); 
    console.log(full_name); 
}

const student = {
    id: 101,
    full_name: "Hasan Moni"
}

student_info(student);