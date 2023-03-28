// BOM(Browser Object Model)

// 1. alert 
// 2. confirm 
// 3. prompt 


/*
alert('error here')
*/ 


/*
function delete_something(){
    var con = confirm("Do you want to delete?"); 
    
    if(con){
        console.log('deleted');
    }else{
        console.log('not deleted'); 
    }
}

delete_something();
*/ 


function welcome_message(){
    var h1 = document.createElement('h1'); 
    let text; 

    var name = prompt("Enter your name: ");
    if(name == null || name == ""){
        text = 'no name found'; 
    }else{
        text = "Welcome "+ name; 
    }

    var text_node = document.createTextNode(text); 
    h1.appendChild(text_node)
    document.body.appendChild(h1); 
}

welcome_message(); 
