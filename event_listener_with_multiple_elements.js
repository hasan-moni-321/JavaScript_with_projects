/*
document.querySelectorAll('.myButton')[0].addEventListener('click', function(){
    var text = this.innerHTML; 
    document.querySelector('h1').innerHTML = text + " is clicked"; 
});


document.querySelectorAll('.myButton')[1].addEventListener('click', function(){
    var text = this.innerHTML; 
    document.querySelector('h1').innerHTML = text + " is clicked"; 
});


document.querySelectorAll('.myButton')[2].addEventListener('click', function(){
    var text = this.innerHTML; 
    document.querySelector('h1').innerHTML = text + " is clicked"; 
});
*/




////////////////////////////////////////////////////////////
// all the task together 
///////////////////////////////////////////////////////////
var len = document.querySelectorAll('.myButton').length; 

for(var i=0; i<len; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        var text = this.innerHTML; 
        document.querySelector('h1').innerHTML = text + " is clicked"
    }); 
}
