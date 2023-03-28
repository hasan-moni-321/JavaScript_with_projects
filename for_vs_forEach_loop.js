
// for vs forEach loop 

var numbers = [2,4,6,8,1,3,5,7]; 
for(var x=0; x<numbers.length; x++){
    console.log(numbers[x]);
}


var numbers = [2,4,6,8]; 
numbers.forEach(my_function)

function my_function(x){
    console.log(x); 
}


var numbers = [1,3,5,7]; 
numbers.forEach(function(x){
    console.log(x); 
})


var rand_numbers = [1,2,3,4,5]; 
var sqr_rand_numbers = []; 
rand_numbers.forEach(function(x){
    sqr_rand_numbers.push(x*x); 
})
console.log(sqr_rand_numbers); 



var random_numbers = [2,5,8,0,2]; 
random_numbers.forEach(function(x, index, arr){
    arr[index] = x+5;
})
console.log(random_numbers); 
