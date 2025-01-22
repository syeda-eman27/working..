//arrguments perameters
function myFunction(num1,num2){
    console.log("Sum of the  numbers ",num1+num2,"<br>");
    console.log("Sub of the numbers ",num1-num2,"<br>");
    console.log("Multi of the numbers ",num1*num2,"<br>");
    console.log("Divi of the numbers ",num1/num2,"<br>"); 
}
myFunction(55,22);

//reture function:
function myValue (num3,num4,num5){
    let total = num3+num4+num5;
    return(total);
}
let result = myValue(60,70,55);
console.log("Results",result);

function per(total){
    let percentage = total/500*100;
    return(percentage);
}
let results = per(result);
console.log("Your percentage is ",results);
