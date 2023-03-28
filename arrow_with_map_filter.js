// arrow with map, filter 


var students = [
    {
        id: 101,
        name: "rana",
        gpa: 2.6
    }, 
    {
        id: 102,
        name: "hasan", 
        gpa: 2.56
    }, 
    {
        id: 103,
        name: "nadira",  
        gpa: 4.56
    },
    {
        id: 104,
        name: "tamim",
        gpa: 5
    }
]


// using traditional function.
function student_name(){
    return students.filter(function(x){
       return x.gpa > 3
    }).map(function(y){
        return y.name; 
    })
}

console.log(student_name());



// using arrow function 
const student_name2 = () => {
    return students.filter((x) => x.gpa > 3).map((y) => y.name); 
}

console.log(student_name2()); 



