

// using forEach()
var numbers = [2,3,4,5]; 
var sqr_numbers = []; 

numbers.forEach(function(x) {
    sqr_numbers.push(x*x);
}); 
console.log(sqr_numbers); 


// using map()
var num = [5,6,7,8]; 

var square_number = num.map(function(x) {
    return x*x; 
})
console.log(square_number); 


// using filter 

var numbers = [3,5,7,9]; 
var filtering = numbers.filter(function(x){
    return x>5;
})
console.log(filtering); 