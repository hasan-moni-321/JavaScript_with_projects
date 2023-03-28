/*
for(var i=0; i<3; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        var text = this.innerHTML; 

        switch(text){
            case "A":
                var audio = new Audio('audios/1.wav');
                audio.play(); 
                break; 
            case "B": 
                var audio = new Audio('audios/2.wav'); 
                audio.play();
                break; 
            case "C": 
                var audio = new Audio('audios/3.wav'); 
                audio.play(); 
                break; 
        }
    });
}
*/ 

 

for(i=0; i<3; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        var text = this.innerHTML; 

        play_audio(text);
    })
}

function play_audio(text){
    switch(text){
        case "A":
            var audio = new Audio("audios/1.wav");
            audio.play();
            break;
        
        case "B":
            var audio = new Audio('audios/2.wav'); 
            audio.play(); 
            break; 

        case "C":
            var audio = new Audio('audios/3.wav'); 
            audio.play();
            break; 
    };
}