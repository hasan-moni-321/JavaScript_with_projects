
// Object literals 

function student_info(name, age){
    return {
        name: name,
        age: age
    }
}

console.log(student_info("hasan", 28))



function student_info2(name, age){ 
    return {
        name,
        age
    }
}

console.log(student_info2("rana", 33)); 




// function inside object 
let message = {
    func_name: function(){
        return "Hi this is function inside object."; 
    }
}

console.log(message.func_name()); 




// function inside object 
let message2 = {
    func_name2(){
        return "short function inside object."; 
    }
}

console.log(message2.func_name2()); 



let message3 = {
    "function name"(){
        return "function name with space."; 
    }
}
console.log(message3['function name']())