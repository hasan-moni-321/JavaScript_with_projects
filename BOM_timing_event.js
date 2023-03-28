// BOM(Browser Object Model)
 
// 1. setTimeOut()
// 2. setInterval()



/*
setTimeout(() => {
    console.log("printed after some seconds")
}, 2000); 
*/ 


/*
setTimeout(display, 2000);

function display(){
    console.log("display function called.")
}
*/ 


/*
const button = document.querySelector('.save-btn'); 
const p = document.querySelector('.para-class'); 


button.addEventListener('click', save_info); 

function save_info(){
    p.textContent = 'user registration successful.'
    setTimeout(() => {
        p.textContent = ""
    }, 2000);
}
*/



const button = document.querySelector('.save-btn'); 
const p = document.querySelector('.para-class'); 

button.addEventListener('click', counting); 

function counting(){
    let count = 0;
    p.textContent = count; 

    setInterval(() => {
        count++;
        p.textContent = count; 
    }, 1000);

}