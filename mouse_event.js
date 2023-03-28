// MouseEvent 

// 1. click 
// 2. dblclick 
// 3. mousedown
// 4. mouseup 
// 5. mouseenter 
// 6. mouseleave 
// 7. mousemove 
// 8. mouseover 

console.clear(); 

/*
const div = document.querySelector('div'); 
div.addEventListener('click', function(e){
    console.log('click') 
});


div.addEventListener('dblclick', function(){
    console.log('dblclick'); 
});


div.addEventListener('mouseup', function(){
    console.log('mouseup');
}); 


div.addEventListener('mousedown', function(){
    console.log('mousedown');
});


div.addEventListener('mouseenter', function(){
    console.log('mouseenter'); 
});


div.addEventListener('mouseleave', function(){
    console.log('mouseleave')
});


div.addEventListener('mouseover', function(){
    console.log('mouseover'); 
});

div.addEventListener('mousemove', function(){
    console.log('mouseover'); 
})
*/ 


/*
const div = document.querySelector('div');
div.addEventListener('mousemove', function(e){
    // console.log("clientX = " + e.clientX + " clientY = " + e.clientY)
    console.log('oppsetX = ' + e.offsetX + " offsetY = " + e.offsetY); 
});
*/ 


/*
const div = document.querySelector('div'); 
div.addEventListener('click', function(e){
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    console.log(e.target.textContent);
}); 
*/ 


const buttons = document.querySelectorAll('.btn');

Array.from(buttons).map((button) => {
    button.addEventListener('click', function(e){
        // console.log('clicked'); 
        console.log(e.target.innerText);
    });
}); 
