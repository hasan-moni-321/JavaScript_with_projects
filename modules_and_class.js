import { text, fun_name } from "/modules_and_class2.js"; 
// importing in another way
import { country_name, final_fun_name } from "./modules_and_class2.js";
// importing in a different way
import { country_name as country_name_2, final_fun_name as final_fun_name_2 } from "./modules_and_class2.js";


console.log(text); 


fun_name("Thi is the another text.")
console.log(text) 

// working with different name 
console.log(country_name); 

final_fun_name("This is the 2nd another text."); 
console.log(text);  


// working with different name 
console.log(country_name_2); 

final_fun_name_2("Change in import"); 
console.log(text); 


//////////////////////////////////////////////////////////////////////
console.log("\n\n\nWorking with Class\n")


class student{
    constructor(id, name){
        this.id = id;  
        this.name = name
    }
}

let s1 = new student(101, 'moni'); 
console.log(s1); 
console.log(s1.id); 
console.log(s1.name); 



//////////////////////////////////////////////////////////////////////////
console.log("\n\nWorking with class with set\n") 

class student2{
    constructor(id, name){
        this.id = id; 
        this.name = name; 
    }

    set new_name(new_name_var){
        this.name = new_name_var; 
    }
}

let s2 = new student2(102, "Sadika"); 
console.log(s2); 
console.log(s2.id); 
console.log(s2.name) 

s2.new_name = "Sultana"; 
console.log(s2.name)



//////////////////////////////////////////////////////////////////////////
console.log("\n\nWorking with class with get\n") 

class student3{
    constructor(id, name){
        this.id = id; 
        this.name = name; 
    }

    set new_name(new_name_var){
        this.name = new_name_var; 
    }

    get student_info(){
        return this.id + " " + this.name; 
    }
}

let s3 = new student3(103, "Sadika"); 
console.log(s3); 
console.log(s3.id); 
console.log(s3.name) 


console.log(s3.student_info)

