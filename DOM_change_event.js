
console.clear(); 


/*
const  input = document.querySelector('input[name=name]'); // can access using only "input" tag 
input.addEventListener('change', change_handler)


function change_handler(e){
    // console.log(e); 
    // console.log(e.type);
    // console.log(e.target); 
    // console.log(e.target.className);
    // console.log(e.target.id); 
    // console.log(e.target.value); 
}
*/ 


/*
const programs = document.querySelectorAll('input[name=program]'); 

Array.from(programs).map((program) => {
    program.addEventListener('change', program_handler)
})

function program_handler(e){
    if(e.target.checked){
        console.log(e.target.value); 
    }
     
}
*/ 

const departments = document.querySelector("#department"); 
departments.addEventListener('change', change_department); 

function change_department(e){
    console.log(e.target.value); 
}



