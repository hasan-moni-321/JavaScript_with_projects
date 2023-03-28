const data = require("./friends_data.json")

//console.log(data); 

//console.log(data.friends[0])

// console.log(data.friends[0].name)

//data.friends[0].name = "Moni"; 
//console.log(data.friends[0].name); 

//delete data.friends[0].name; 
//console.log(data); 


for (x in data){
    console.log(x); 
    console.log(data[x]); 
}




const data2 = {
    name: "anis", 
    age: 25
}

/// javascript to JSON
console.log(JSON.stringify(data2)); 

// JSON to javascript 
console.log(JSON.parse('{"name": "Hasan"}')); 