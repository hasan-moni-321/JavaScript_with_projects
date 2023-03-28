/*
var my_name = "Hasan Moni"; 


document.write(my_name, "<br/>");  

document.write(my_name +"   "+ "Sachna<br/>");  
document.write(my_name +"  "+"123456789"+" "+ "Sunamganj");  
*/
// name_, occupation, phn, address = "hasan", "software_engineer", 123, "sachna"; 

const { name } = require("ejs");



/*
var num = 25; 
var sc = toString(num)
var str = 'string'; 
document.write(typeof(sc) +"<br/>");
document.write(typeof(str) + "<br/>");  

var st = "25"; 
var st_num = parseInt(st); 
document.write("This is the string to number: " + st_num + "<br/>");   

var f_num = 2.567; 
document.write(f_num.toFixed() + "<br/>"); 
document.write(f_num.toPrecision(2) +"<br/>");  

var t = '234'
document.write(Number(t) + "<br/>"); 
document.write(typeof(t));  
*/ 


/*
document.write("Kamrul" + " Hasan" + " Monir" + "<br/>"); 

var s = "Hasan"; 
document.write(s + " Moni" + "<br/>"); 

var f_name = 'Abdur'; 
var l_name = ' Rahim'; 
var full_name = f_name + l_name 
document.write("My full name is: " + full_name +"<br/>") 

var num1 = 20; 
var num2 = 30; 

document.write("num1 is: " + num1 + " and num2 is: " + num2); 
*/ 

/*
var text_input = prompt("Enter your country name: "); 
document.write("The number of characters is: " + text_input.length + "<br/>"); 
*/ 

/*
var text = "Bangladesh"; 
document.write(text.charAt(2) +"<br/>"); 
document.write(text.toUpperCase() +"<br/>"); 
document.write(text.toLowerCase() + "<br/>");  

var text1 = 'I live in '; 
var text2 = 'Bangladesh'; 
document.write(text1.concat(text2) + "<br/>"); 
document.write(text2.slice(2, 6)); 
*/ 

/*
var f_name = prompt("Enter first name: ");
var l_name = prompt("Enter second name: "); 
var full_name = f_name + " " + l_name; 
document.write(full_name + "<br/>"); 
document.write(full_name.length + "<br/>"); 
document.write(full_name.toUpperCase() + "<br/>"); 
document.write(full_name.slice(2,3))
*/ 

/*
var x = 8; 
var y = x+2; 
document.write(y + "<br/>"); 
document.write(y-3 + "<br/>"); 
document.write(y*2 + "<br/>"); 
document.write(y/2 + "<br/>"); 
document.write(x%3 + "<br/>"); 
document.write(x**2 + "<br/>"); 
document.write(x++ + "<br/>"); 
document.write(x-- + "<br/>"); 
document.write(x += y + "<br/>"); 
//document.write(x -= 4 + "<br/>");  
// document.write(x *= 6 + "<br/>"); 
// document.write(x /= 3 + "<br/>");  
// document.write(x %= 7 + "<br/>"); 
// document.write(x **= 9 + "<br/>"); 
*/ 


/*
var num1 = parseInt(prompt("Enter first number: " ));  
var num2 = parseInt(prompt("Enter second number: " ));   

var sum, sub; 

sum = num1 + num2; 
document.write("Summation is = " + sum +"<br/>"); 

sub = num2 - num1; 
document.write("Subtraction is = " + sub);  
*/ 

/*
var num1 = parseInt(prompt("Enter first number : ")); 
var num2 = parseInt(prompt("Enter second number : ")); 

document.write(num1, " + ", num2, " = ", num1 + num2 +"<br/>");
document.write(num1, " - ", num2, " = ", num1 - num2 +"<br/>");
document.write(num1, " * ", num2, " = ", num1 * num2 +"<br/>");
document.write(num1, " / ", num2, " = ", num1 / num2 +"<br/>");
document.write(num1, " % ", num2, " = ", num1 % num2 +"<br/>"); 
*/ 

/*
var base = parseFloat(prompt("Enter base : ")); 
var height = parseFloat(prompt("Enter height : ")); 

document.write("Area of square is : "+ base*height + "<br/>"); 
document.write("Area of triangle is : "+ (base*height)/2); 
*/ 

/*
var far = parseFloat(prompt("Enter fahrenheit temperature : ")); 
document.write("Celsius temperature is :" + (far - 32)*(5/9) + "<br/>"); 

var cel = parseFloat(prompt("Enter celsius temperature : ")); 
document.write("Fahrenheit temperature is :" + ((cel * (9/5)) + 32) );
*/ 

/*
var num1 = -5; 

if (num1 % 2==0) 
    document.write("This is even number"); 
else  
    document.write("This is odd number");
*/ 

/*
var mark = prompt("Please enter the marks :"); 

if (mark > 100)
    document.write("Please enter a valid mark"); 
else if (mark > 80 && mark <= 100)
    document.write("Congratulations, you got the A+"); 
else if (mark >70 && mark <= 79)
    document.write("You got A"); 
else if(mark > 60 && mark <= 69)
    document.write("You got A-"); 
else if (mark > 50 && mark <= 59)
    document.write("You got B"); 
else if (mark > 40 && mark <= 49)
    document.write("You got C"); 
else if (mark >33 && mark <= 39)
    document.write("You got D"); 
else 
    document.write("Unfortunately, it's sad that you failed in this subject!") 
*/ 

/*
var num = prompt("Enter a number : "); 

if (num > 0) 
    document.write("The number is positive"); 
else if (num < 0)
    document.write("The number is negative"); 
else 
    document.write("The number is zero"); 
*/

/*
var num1 = prompt("Enter 1st number : "); 
var num2 = prompt("Enter 2nd number : "); 
var num3 = prompt("Enter 3rd number : "); 

if (num1 > num2 && num1 > num3)
    document.write("Number "+ num1 +" is the biggest number"); 
else if (num2 > num3 && num2 > num1)
    document.write("Number "+ num2 +" is the biggest number"); 
else 
    document.write("Number "+ num3 +" is the biggest number"); 
*/ 

/*
var lett = prompt("Please enter a letter : "); 
lett = lett.toLowerCase(); 

if (lett == 'a' || lett == "e" || lett == 'i' || lett == 'o' || lett == 'u' || lett == 'A' || lett == "E" || lett == "I" || lett == "O" || lett == "U") 
    document.write( lett + " is a vowel"); 
else 
    document.write(lett +" is a consonant"); 
*/ 

/*
var digit = prompt("Please enter a digit : "); 

if (digit == 0) 
    document.write("Zero"); 
else if (digit == 1)
    document.write("One"); 
else if (digit == 2)
    document.write("Two"); 
else if (digit == 3)
    document.write("Three"); 
else if (digit == 4)
    document.write("Four"); 
else if (digit == 5)
    document.write("Five"); 
else if (digit == 6)
    document.write("Six"); 
else if (digit == 7)
    document.write("Seven"); 
else if (digit == 8)
    document.write("Eight"); 
else if (digit == 9)
    document.write("Nine"); 
else
    document.write("Please enter a valid number!"); 
*/ 

/*
var digit = prompt("Enter a number : "); 

switch(digit){
    case "0":
        document.write("zero"); 
        break
    case "1":
        document.write("one"); 
        break
    case '2': 
        document.write('two'); 
        break
    case '3': 
        document.write("three"); 
        break
    case '4': 
        document.write("four"); 
        break
    case '5': 
        document.write("five"); 
        break
    case '6':
        document.write("six");
        break
    case '7': 
        document.write("seven");
        break
    case '8': 
        document.write("eight"); 
        break
    case '9': 
        document.write("nine"); 
        break
    default: 
        document.write("Not a number") 
}
*/

/*
var  lett = prompt("Please input a letter : "); 
lett = lett.toLowerCase()

switch(lett){
    case 'a': 
        document.write("vowel"); 
        break
    case 'e':
        document.write('vowel');
        break
    case 'i':
        document.write('vowel'); 
        break 
    case 'o':
        document.write('vowel'); 
        break
    case 'u':
        document.write('vowel'); 
        break
    default: 
        document.write('consonant'); 
}
*/ 

/*
var  lett = prompt("Please input a letter : "); 
lett = lett.toLowerCase()

switch(lett){
    case 'a': 
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write('vowel'); 
        break
    default: 
        document.write('consonant'); 
}
*/ 

/*
for(var x=1; x<=10; x=x+1){
    document.write("<h> Bangladesh </h> <br/>"); 
}

for(var x=1; x<=10; x=x+2){
    document.write(x)
}
document.write("<br/>"); 

for(var x=2; x<=100; x=x+2){
    document.write(x +" ")
}
document.write("<br/>"); 

for (var x=10; x>=1; x--){
    document.write(x +" ")
}
document.write("<br/>");
document.write("End")
*/ 

/*
var sum = 0; 

for(x=1; x<=10; x++){
    sum = sum+x; 
}
document.write(sum); 
*/ 

/*
var s = Number(prompt("Enter the starting number : ")); 
var n = Number(prompt("Enter the ending number : ")); 
var sum = 0;

for (var x=s; x <= n; x = x+2){
    sum = sum+x 
}
document.write(sum); 
*/ 

/*
for (x=1; x<=5; x++){
    var num1 = Number(prompt("Enter first number "));
    var num2 = Number(prompt("Enter second number ")); 
    var sum = num1 + num2;
    document.write("Result is : "+ sum); 
}
*/ 

/*
var i = 1; 

while(i<=10){
    document.write(i + "<br/>"); 
    i++; 
}
*/ 

/*
var j = 1; 
var sum = 0; 

while (j<=10){
    sum = sum + j; 
    j=j+1;  
}
document.write(sum);  
*/ 


/*
var k = 2; 
var sum = 0;

while(k<=100){
    sum = sum + k; 
    k=k+2;  
}
document.write(sum); 
*/ 

/*
var i = 1; 
var sum = 0;

while(i <= 100){ 
    if(i%3==0 && i%5==0){
        document.write(" "+ i); 
        sum = sum+i;
    }
    i = i+1; 
}
document.write(" "+sum); 
*/ 

/*
var i = 1; 

do{
    document.write(i+" "); 
    i++; 
}while(i <= 10);
*/ 


/*
for(i=1; i<=100; i++){
    if (i==11){
        break 
    } 
    document.write(i +" ") 
}
*/ 

/*
for(i=1; i<=100; i++){
    document.write(" "+i); 
    if (i==10){
        break; 
    }
}
*/ 

/*
for(i=1; i<=100; i++){
    if (i==10){
        continue; 
    }
    document.write(i +" "); 
}
*/ 

/*
for(i=1; i<=100; i++){
    if(i>=10 && i<16){
        continue; 
    }
    document.write(" "+i); 
}
*/ 

/*
for(i=1; i<=100; i++){
    if(i%2 != 0){
        continue;
    }
    document.write(" "+ i); 
}
*/ 


/*
var num = Number(prompt('Enter a number : ')); 

if(num < 0){
    document.write('Negative'); 
}
else
    document.write('Positive');
*/ 

/*
var num = Number(prompt("Enter number : ")); 

var result = num < 0? "negative" : 'positive'
document.write(result); 
*/ 


/*
var num = Number(prompt("Enter number : ")); 

var result = num < 0? document.write("Negative") : document.write("Positive"); 
*/ 

/*
var num = Number(prompt("Enter number : ")); 

if(num < 0){
    document.write('negative'); 
}
else if(num>0){
    document.write("positive"); 
}
else 
    document.write('zero'); 
*/ 

/*
var num = Number(prompt("Enter number : ")); 

var result = num > 0? "positive" : num < 0? 'negative' : 'zero'; 
document.write(result); 
*/ 

/*
function square(num1, num2){
    var result = num1 * num2; 
    return result
}

result = document.write("result is :" + square(2, 6));  
*/ 

/*
function addition(num1, num2){
    var result = num1 + num2; 
    return result;
}

var add = addition(10, 20); 
document.write(add); 
*/ 

/*
function subtraction(num1, num2){ 
    var result = num1 - num2; 
    return result; 
}

var sub = subtraction(30, 10); 
document.write(sub);
*/ 

/*
var num1 = Number(prompt()); 
var num2 = Number(prompt());  

(function addition(str1, str2){
    var result = str1 + str2; 
    document.write(result +" "); 
})(num1, num2); 
*/ 

/*
const display = function display_message(msg){
    document.write(msg);
}

display("msg");  
*/ 

/*
var names = new Array(5); 

names[0] = 'rana'; 
names[1] = 'moni'; 
names[2] = 'nadira'; 
names[3] = 'sharmin'; 
names[4] = 'tamim'; 

document.write(names[3] +"<br/>");
document.write(names+"<br/>"); 
document.write(names.length); 
*/ 

/*
var names = ['rana', 'moni', 'nadira', 'sharmin', 'tamim']; 
document.write(names +"<br/>"); 
document.write(names.length +"<br/>")
document.write(names[2] +"<br/>"); 
*/ 

/*
var names = ['rana', 'moni', 'nadira', 'sharmin', 'tamim']; 

document.write(names +"<br/>");
document.write(names.length +"<br/>"); 

names.push('aaaaaa'); 
document.write(names +"<br/>"); 
document.write(names.length +"<br/>"); 

names.pop(); 
document.write(names +"<br/>"); 
document.write(names.length)
*/ 

/*
var country1 = ['bangladesh', 'india']; 
var country2 = ['pakistan', 'nepal']; 

var country_add = country1.concat(country2); 
document.write(country_add); 
*/ 

/*
var num = [10, 20, 30, 40, 50]; 
var sum = 0;

for(var i=0; i< num.length; i++){
    sum = sum + num[i];
}
document.write(sum +"<br/>"); 
*/ 

/*
var numbers = new Array();
var sum = 0; 

for(i=0; i<5; i++){
    numbers[i] = Number(prompt('Enter number : ')); 
}

for(i=0; i<numbers.length; i++){
    sum = sum + numbers[i]; 
}
document.write(sum); 
*/ 

/*
var arr = ['rana', 'hasan', 'nadira', 'sharmin', 'tamim']; 

document.write(arr + "<br/>"); 

arr.shift(); 
document.write(arr +"<br/>"); 

var arr = ['rana', 'hasan', 'nadira', 'sharmin', 'tamim'];
arr.unshift('rahim'); 
document.write(arr +"<br/>"); 
*/ 


/*
var arr = ['rana', 'hasan', 'nadira', 'sharmin', 'tamim']; 
arr.splice(3, 0, "dada", 'dadi'); //start, remove element, new element
document.write(arr +"<br/>"); 


arr.splice(4, 6);
document.write(arr); 
*/

/*
var arr = ['rana', 'hasan', 'nadira', 'sharmin', 'tamim']; 
document.write(arr +"<br/>"); 

var new_arr = arr.slice(1); 
document.write(new_arr +"<br/>"); 

var arr = ['rana', 'hasan', 'nadira', 'sharmin', 'tamim']; 
document.write(arr +"<br/>");

var new_arr = arr.slice(1, 4);  
document.write(new_arr);
*/ 

/*
var arr = ['rana', 'hasan', 'nadira', 'sharmin', 'tamim']; 
document.write(arr +"<br/>"); 


var arr_sort = arr.sort(); 
document.write(arr_sort +"<br/>"); 

var arr_rever = arr.reverse();
document.write(arr_rever); 
*/ 

/*
var numbers = [10, 50, 30, 40, 15]; 
numbers.sort(); 
document.write(numbers +"<br/>"); 

var numbers = [10, 50, 30, 40, 15]; 
numbers.sort(function(a, b){ 
    return a-b; 
}); 
document.write(numbers); 
*/ 

 
/*
function hightestScore(scores){
    let max = scores[0]; 
    for(var x=1; x<scores.length; x++){
        if(max < scores[x]){
            max = scores[x]; 
        }
    }
    return max; 
}

var scores = [5,8,12, 56,43,7,97,35,67,54,0]; 
var hs = hightestScore(scores);
document.write(hs); 
*/ 

/*
function hightestScore(Array2d){
    let high_scorer = Array2d[0][0]; 
    let high_score = Array2d[0][1]; 
    for(x=1; x<Array2d.length; x++){
        if(high_score < Array2d[x][1]){
            high_score = Array2d[x][1]; 
            high_scorer = Array2d[x][0];
        }
    }
    return high_scorer // , high_score;
}

var Array2d = [["hasan", 5], ['rana', 3], ['nadira', 7], ['sharmin', 9], ['tamim', 5]]; 
var name = hightestScore(Array2d);
document.write(name)  
*/ 

document.write("Hasan Moni"); 
