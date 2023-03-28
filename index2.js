/*
var student1 = {
    name: "Hasan", 
    age: 28, 
    cgpa: 3.46,
    lang: ['bangla', 'english']
}

document.write(student1.name + "<br/>"); 
document.write(student1.cgpa + "<br/>"); 
*/
const { query } = require("express")

 

/*
var student1 = {
    name: "Hasan", 
    age: 28, 
    cgpa: 3.46,
    lang: ['bangla', 'english']
}

var student2 = {
    name: "rana", 
    age: 32, 
    cgpa: 3.5, 
    lang: ['bangla', 'english']
}

var student3 = {
    name: "tamim", 
    age: 23, 
    cgpa: 3, 
    lang: ['bangla'] 
}

document.write(student1.name + "<br/>"); 
document.write(student1.cgpa + "<br/>"); 

document.write(student2.name + "<br/>"); 
document.write(student2.lang + "<br/>"); 

document.write(student3.name + "<br/>"); 
document.write(student3.cgpa); 
*/ 

/*
function Student(name, age, cgpa, lang){
    this.name = name; 
    this.age = age; 
    this.cgpa = cgpa; 
    this.lang = lang; 
}

var student1 = new Student('hasan', 28, 3.46, ['bangla', 'english']);
var student2 = new Student('rana', 32, 3.5, ['english', 'bangla']); 
var student3 = new Student('tamim', 23, 3, ['bangla']);

document.write(student1.name + " " + student1.cgpa + "<br/>"); 
document.write(student2.name + " " + student2.lang + "<br/>"); 
document.write(student3.name + " " + student3.cgpa); 
*/ 

/*
function Student(name, age, cgpa, lang){
    this.name = name; 
    this.age = age; 
    this.cgpa = cgpa; 
    this.lang = lang; 

    this.display = function(){
        document.write(this.name + " "); 
        document.write(this.age + " "); 
        document.write(this.cgpa + " "); 
        document.write(this.lang + " " + "<br/>"); 
    }
}

var student1 = new Student('hasan', 28, 3.46, ['bangla', 'english']);
var student2 = new Student('rana', 32, 3.5, ['english', 'bangla']); 
var student3 = new Student('tamim', 23, 3, ['bangla']);

student1.display()
student2.display()
student3.display()
*/ 


/*
document.write(Math.sqrt(5) + "<br/>"); 
document.write(Math.abs(-5) + "<br/>"); 
document.write(Math.sin(3) + "<br/>"); 
document.write(Math.pow(3) + "<br/>"); 
document.write(Math.floor(5.3) + "<br/>"); 
document.write(Math.floor(5.7) + "<br/>"); 
document.write(Math.ceil(5.7) + "<br/>"); 
document.write(Math.ceil(3.2) + "<br/>"); 
document.write(Math.round(5.4) + "<br/>"); 
document.write(Math.round(5.5) + "<br/>"); 
document.write(Math.max(5, 3, 8, -3) + "<br/>"); 
document.write(Math.random() + "<br/>"); 
document.write(Math.random() * 6 + "<br/>")
document.write(Math.floor(Math.random() * 6) + "<br/>") // 0 to 5 
document.write(Math.floor(Math.random() * 5) + 1 + "<br/>") // 1 to 5
document.write(Math.floor(Math.random() * 11) + 10 + "<br/>") // 1 to 5
*/ 

/*
var num1 = parseInt(prompt('Enter first number: ')); 
var num2 = parseInt(prompt("Enter 2nd number: ")); 

var maximum_num = Math.max(num1, num2); 
document.write(maximum_num); 
*/ 


/*
var number_of_own = 0;
var number_of_lost = 0;

for(x=0; x<5; x++){
    var guess_number = parseInt(prompt("Enter a number from 1 to 5 : ")); 
    var random_number = Math.floor(Math.random()*5) + 1; 

    if(guess_number == random_number){
        document.write("You have won!" +"<br/>");
        number_of_own++; 
    }else{
        document.write("You have lost! Random number was: " + random_number +"<br/>"); 
        number_of_lost++; 
    }
}

document.write("Total number of win is :" + number_of_own + "<br/>"); 
document.write("Total number of lost is :" + number_of_lost + "<br/>"); 
*/ 

/*
var date = new Date(); 
document.write(date + "<br/>");

var year = date.getFullYear(); 
document.write(year + "<br/>"); 

var month = date.getMonth(); 
document.write(month + "<br/>"); 

var c_date = date.getDate(); 
document.write(c_date + "<br/>"); 

var c_day = date.getDay(); 
document.write(c_day + "<br/>"); 

var c_hour = date.getHours(); 
document.write(c_hour + "<br/>"); 

var c_min = date.getMinutes(); 
document.write(c_min + "<br/>"); 
*/ 

/*
document.getElementById('heading1').innerHTML = 'Hello'; 
document.getElementsByTagName('h1')[1].innerHTML = 'heading two change'; 
document.getElementById('parag').innerHTML = 'paragraph tag change'; 

document.getElementsByClassName('class_tag')[0].innerHTML = "this is for class name"
*/ 

/*
document.getElementById('pid').innerHTML = "This is changed"; 
document.querySelector('#pid').innerHTML = "This is changed"; // selecting using id
document.querySelector(".pid").innerHTML = "This is changed"; // selecting using class 
document.querySelector("p").innerHTML = "This is changed"; // selecting using tag   
*/ 

/*
document.querySelector('.my-div a').innerHTML = "new text"; 
*/ 

/*
document.querySelectorAll('a').innerHTML = "this is a text"; 
document.querySelectorAll('a')[0].innerHTML = "this is a text"; 
document.querySelectorAll('a')[2].innerHTML = "this is a text"; 
document.querySelectorAll('a')[1].innerHTML = "this is a text"; 
document.querySelectorAll('a')[3].innerHTML = "this is a text"; 
*/ 

/*
function myMessage1(){
    var myVar = document.querySelector('#paraid');
    myVar.innerHTML = "You have clicked on button1"; 
}

function myMessage2(){
    var myVar = document.querySelector("#paraid"); 
    myVar.innerHTML = "You have clicked on button2"; 
}
*/ 


/*
var acc_butt = document.querySelector('#paraid'); 

function my_function1(){
    acc_butt.innerHTML = "You have clicked button 1"; 
}

function my_function2(){
    acc_butt.innerHTML = "You have clicked button 2"; 
}
*/ 


/*
function function1(){
    var img_tag = document.querySelector("#img1");
    img_tag.src = "/home/moni/JavaScript2/images/cat.jpg";
}

function function2(){
    var img_tag = document.querySelector("#img1");
    img_tag.src = "/home/moni/JavaScript2/images/dog.jpg"; 
}
*/ 


/*
var link = document.getElementsByTagName('a')[0]; 
link.innerHTML = "Study with Hasan"; 

link.style.textDecoration = 'none';
link.style.color = 'green'; 
*/ 

