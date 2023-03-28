// BOM(Browser Object Model) 

// 1. setInterval()


const b = document.querySelector('.button-class'); 
const p = document.querySelector('.para-class'); 

b.addEventListener('click', start_clock); 

function start_clock(){
    let date = new Date(); 
    let hour = date.getHours(); 
    let minute = date.getMinutes(); 
    let second = date.getSeconds(); 

    minute = format_time(minute);
    second = format_time(second); 

    let time = hour + ":" + minute + ":" + second
    p.textContent = time; 

    setInterval(start_clock,1000)
}


function format_time(value){
    if(value<10){
        value = "0" + value; 
    }
    return value; 
}