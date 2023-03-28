// Default and Rest parameter 


/*
// default parameter. 
function default_function(text="default value"){
    console.log(text); 
}

default_function("this is a value.")
*/ 

// rest parameter 
function rest_function(x, y, ...z){
    console.log(x, y, z);
}

rest_function(10, 20, 30, 40, 50); 
