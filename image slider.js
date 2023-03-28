/*
// adding element 
var heading3 = document.createElement("h1"); 
var text = document.createTextNode("This is heading 3"); 
heading3.appendChild(text); 


var myDiv = document.getElementById('my-div'); 
myDiv.appendChild(heading3); 


// removing element 
var myDiv = document.getElementById('my-div'); 
var heading2 = document.getElementsByTagName("h1")[1]; 
myDiv.removeChild(heading2); 


// adding element in a specific place 
var heading0 = document.createElement('h1'); 
var text0 = document.createTextNode('This is heading 0'); 
heading0.appendChild(text0); 

var heading1 = document.getElementsByTagName('h1')[0]; 
myDiv.insertBefore(heading0, heading1); 
*/ 



var photos = ["images/cat.jpg", "images/dog.jpeg", "images/rabbit.jpg"]
var img_tag = document.querySelector('img'); 

var count = 0; 

function next(){
    count++; 

    if(count >= photos.length){
        count = 0; 
        img_tag.src = photos[count]; 
    }else{
        img_tag.src = photos[count]; 
    }
}

function prev(){
    count--; 

    if(count < 0){
        count=photos.length - 1; 
        img_tag.src = photos[count]; 
    }else{
        img_tag.src = photos[count]; 
    }
}






