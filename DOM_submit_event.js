
const form = document.querySelector("form"); 

const name = form.querySelector("div #name"); 
const email = form.querySelector("div #email"); 
const pass = form.querySelector("div #passward"); 


form.addEventListener('submit', form_handler); 

function form_handler(e){
    e.preventDefault(); 
    
    // console.log(name.value); 
    // console.log(email.value); 
    // console.log(pass.value); 

    //storing values
    const user_info = {
        name: name.value, 
        email: email.value, 
        pass: pass.value
    }

    // printing values
    console.log(user_info); 

    //after printing values remove from tag
    name.value = "";
    email.value = ""; 
    pass.value = ""; 
}

