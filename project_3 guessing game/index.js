/* initializing some values */
let totalAttempts = 5; 
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;

/* selecting card-body and form */
const cardBody = document.querySelector(".card-body")
const form = document.querySelector("form") 

/* selecting input fiels and button from form */
const guessingNumber = form.querySelector("#guessingNumber") 
const checkButton = form.querySelector("#check") 

/* selecting 2 paragraph */ 
const resultText = cardBody.querySelector(".resultText")
const lostWonMessage = document.createElement("p"); 
const remainingAttempts = cardBody.querySelector(".remainingAttempts")


form.addEventListener('submit', function(event){
    event.preventDefault(); 

    attempts++; 

    if(attempts > 5){
        guessingNumber.disabled = true; 
        checkButton.disabled = true; 
    }else{ 
        /* calling checkResult function */ 
        checkResult(Number(guessingNumber.value)); 
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`
    }

    guessingNumber.value = ""; 
}) 

function checkResult(guessingValue){
    const randomNumber = getRandomNumber(5) 

    if(guessingValue == randomNumber){
        resultText.innerHTML = `you have won`
        totalWons++; 
    }else{
        resultText.innerHTML = `you have lost; random number was: ${randomNumber}` 
        totalLosts++; 
    }

    lostWonMessage.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}` 
    lostWonMessage.classList.add("large-text"); 
    cardBody.appendChild(lostWonMessage);  
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1
}
