// use of localStorage 
localStorage.setItem("userName", "Hasan Moni"); 
localStorage.setItem("passward", "1234567890"); 


const userName = localStorage.getItem("userName"); 
const userPassward = localStorage.getItem("passward"); 
console.log(userName, userPassward); 

localStorage.removeItem("userName"); 
localStorage.removeItem("passward"); 





const country = ['bangladesh', 'nepal', 'bhutan']; 
localStorage.setItem('countries', JSON.stringify(country)); 

const countryList = JSON.parse(localStorage.getItem("countries")); 
console.log(countryList); 

localStorage.clear(); 


// sessionStorage 
sessionStorage.setItem("user_name", "Hasan Moni"); 
const user_name = sessionStorage.getItem("user_name"); 
console.log(user_name); 

sessionStorage.removeItem("user_name"); 


sessionStorage.setItem("user1", "rana"); 
sessionStorage.setItem("user2", "Moni");
const user_1 = sessionStorage.getItem("user1"); 
const user_2 = sessionStorage.getItem("user2"); 
console.log(user_1, user_2); 
sessionStorage.clear(); 


const stu1 = {
    id: 101,
    name: "Hasan Moni"
}

sessionStorage.setItem("user", JSON.stringify(stu1)); 
const details = JSON.parse(sessionStorage.getItem("user")); 
console.log(details); 



// cookie 
document.cookie = "user_name=Kamrul Hasan Moni; expires= Mon, 20 Mar 2023 21:18:00 GMT"; 
