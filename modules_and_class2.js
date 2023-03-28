let text = "Bangladesh"; 

function fun_name(txt){
    text = txt; 
}


export {text, fun_name}; 

// exporting with different name 
export{text as country_name, fun_name as final_fun_name}; 






