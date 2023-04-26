const selectFontSize = document.getElementById("selectFontSize"); 
const selectBgColor = document.getElementById("selectBgColor"); 
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main"); 

// change font size 
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value; 
    mainElement.style.fontSize = selectedFontSize; 
    localStorage.setItem("fontSize", selectedFontSize)
}

// change background color 
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;  
    mainElement.style.backgroundColor = selectedBgColor; 
    localStorage.setItem("bgColor", selectedBgColor) 
}

// clear local storage 
const clearLocalStorage = () => {
    localStorage.removeItem("fontSize"); 
    localStorage.removeItem("bgColor"); 
    setValues("aqua", "16px")
}


const setValues = (bgColor, fontSize) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor; 
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}

// load local storage value 
const initialSetup = () => {
    const bgColor = localStorage.getItem("bgColor"); 
    const fontSize = localStorage.getItem("fontSize"); 

    if(bgColor && fontSize){
        setValues(bgColor, fontSize);  
    }
    if(!bgColor && !fontSize){
        setValues("aqua", "16px");   
    }
    if(bgColor && !fontSize){
        setValues(bgColor, "16px");   
    }
    if(!bgColor && fontSize){ 
        setValues("aqua", fontSize);   
    }
}

// add event listener 
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener('change', changeBgColor); 
resetButton.addEventListener('click', clearLocalStorage); 

initialSetup()
