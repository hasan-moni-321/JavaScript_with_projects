var myVar = document.querySelector('#paraid');


function addStyle(){
    // myVar.style.color = 'red'; 
    // myVar.style.fontSize = "3rem"; 
    // myVar.style.fontWeight = "bold";
    // myVar.style.fontStyle = "italic";

    myVar.classList.add('para-style'); 
}


function removeStyle(){
    // var paragr = document.querySelector("#paraid");
    myVar.classList.remove('para-style'); 
}
