
var count = 0

document.querySelector('textarea').addEventListener('keypress', function(event){
    var text = event.key; 
    count++; 

    document.querySelector('p').innerHTML = 'You have pressed : ' + text; // for displaying the key
    document.querySelector('p').innerHTML = "You have pressed : " + count; // for counting the number of key
}); 

