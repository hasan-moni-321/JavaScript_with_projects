// Focus event 

// 1. blur 
// 2. focus 
// 3. focusin 
// 4. focusout


/*
const input = document.querySelector('input'); 
input.addEventListener('blur', function(){
    console.log('blur is occured'); 
})

input.addEventListener('focus', function(){
    console.log('focus is occured'); 
})

input.addEventListener('focusin', function(){
    console.log('focusin is occured'); 
})

input.addEventListener('focusout', function(){
    console.log('focusout is occured'); 
})
*/ 


/*
const input = document.querySelector('input'); 
input.addEventListener('blur', function() {
    input.style.backgroundColor = 'transparent'; 
    input.style.padding = '0'; 
}); 


input.addEventListener('focus', function(){
    input.style.backgroundColor = 'orange';
    input.style.padding = '2rem';  
}); 
*/ 



const input = document.querySelector('input'); 
input.addEventListener('blur', function(e){
    // console.log(e.target.value);
    input.value = e.target.value.toUpperCase(); 
}); 

input.addEventListener('focus', function(){

})




