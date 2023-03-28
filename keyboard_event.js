// keyboard event

/*
const textarea = document.querySelector("textarea"); 
textarea.addEventListener('keydown', function(){
    console.log('keydown');
}); 

textarea.addEventListener('keypress', function(){
    console.log('keypress');
}); 

textarea.addEventListener('keyup', function(){
    console.log('keyup'); 
}); 
*/ 


/*
const textarea = document.querySelector("textarea");
textarea.addEventListener('keyup', function(e){
    // console.log(e); 
    // console.log(e.key);  
    // console.log(e.keyCode); 
    // console.log(e.code);  
    console.log(e.shiftKey); 
}); 
*/ 


/*
const textarea = document.querySelector('textarea'); 
textarea.addEventListener('keyup', function(e){
    if (e.shiftKey){
        console.log('shift + ' + e.key); 
    }
})
*/ 


const textarea = document.querySelector('textarea'); 
textarea.addEventListener('keydown', function(e){
    if (e.repeat){
        alert("don't repeat this!");
    }
}); 