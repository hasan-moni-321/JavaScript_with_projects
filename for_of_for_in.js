const names = ['n1', 'n2', 'n3', 'n4', 'n5']; 

for(let name of names){
    console.log(name); 
}


let students = {
    id: 101,
    name: "Hasan",
    cgpa: 3.56
}

for(let x in students){
    console.log(x); //print key
    console.log(students[x]) // print value 
}
