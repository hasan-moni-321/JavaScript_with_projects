// Clipboard Events 

// 1. copy 
// 2. cut
// 3. paste

const input = document.querySelector('input'); 
const p = document.querySelector('p'); 

input.addEventListener('copy', function(){
    // console.log('you have copied');

    p.innerText = 'you have copied';  

}); 

input.addEventListener('cut', function(){
    // console.log('you have cuted');

    p.innerText = 'you have cuted';
}); 

input.addEventListener('paste', function(){
    // console.log('you have pasted'); 
    
    p.innerText = 'you have pasted'; 
})
