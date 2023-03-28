for(var i=0; i<3; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        var text = this.innerHTML; 
        play_audio(text); 
        play_animation(text); 
    }); 
}

function play_audio(text){
    switch(text){
        case 'a':
            var audio = new Audio('audios/1.wav');
            audio.play();
            break;
        
        case 'b':
            var audio = new Audio('audios/2.wav'); 
            audio.play(); 
            break; 
        
        case 'c': 
            var audio = new Audio('audios/3.wav');
            audio.play(); 
            break; 
    }
}


function play_animation(text){
    var s_button = document.querySelector("." + text); 
    s_button.classList.add('anima'); 
    
    setTimeout(function(){
        s_button.classList.remove('anima');
    }, 1000); 
}