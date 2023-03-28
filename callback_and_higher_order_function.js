function square(x) {
    console.log('square of '+ x + " is :"+ x*x)
}
// square(5)
// const y = square
// y(5)


function higher_order_function(num, callback) {
    callback(num); 
}
higher_order_function(6, square);
