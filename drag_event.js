// Drag Event 

// 1. dragstart 
// 2. drag 
// 3. dragend 
// 4. dragenter 
// 5. dragleave 
// 6. dragover 
// 7. drop 


const div = document.querySelector('div'); 
const p = document.querySelector('p'); 

p.addEventListener('dragstart', function(e){
    e.dataTransfer.setData("Text", e.target.id); 
})

div.addEventListener('dragover', function(e){
    e.preventDefault(); 
})

div.addEventListener('drop', function(e){
    let id = e.dataTransfer.getData('Text')
    // console.log(id); 
    div.appendChild(document.getElementById(id)); 
}); 
