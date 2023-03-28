// BOM (Browser Object Model)

// 1. window object 
// 2. location object 

console.clear(); 

// console.log(window); 


/*
console.log(window.document); 
console.log(window.location); 
console.log(location); 
*/ 

/*
// href
console.log(location.href);

// protocol 
console.log(location.protocol); 

// hostname 
console.log(location.hostname); 

// port 
console.log(location.port); 

// pathname
console.log(location.pathname); 
*/ 

var div = document.querySelector(".location-div"); 

var p1 = div.children[0]; 
p1.textContent = location.href; 

var p2 = div.children[1]; 
p2.textContent = location.protocol; 

var p3 = div.children[2]; 
p3.textContent = location.hostname;  

var p4 = div.children[3]; 
p4.textContent = location.port; 

var p5 = div.children[4]; 
p5.textContent = location.pathname; 



var button = document.getElementById('visit-button')
button.addEventListener('click', function(){
    location.assign("https://www.studywithanis.com"); 
}); 