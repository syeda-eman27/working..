// let number = +(prompt("Enter a number:"));
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// let num1 = parseInt( prompt("Enter the first number:"));
// let num2 = parseInt( prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");
// let result = (num1, num2, operation);{
//     if (operation === '+') {
//         document.write( num1 + num2);
//     } else if (operation === '-') {
//         document.write( num1 - num2);
//     } else if (operation === '*') {
//         document.write( num1 * num2);
//     } else if (operation === '/') {
//         if (num2 !== 0) {
//             document.write( num1 / num2);
//         } else {
//             document.write("Error: Division by zero is not allowed.");
//         }
//     } else if (operation === '%') {
//         if (num2 !== 0) {
//            document.write( num1 % num2);
//         } else {
//            document.write( "Error: Modulus by zero is not allowed.");
//         }
//     } else {
//        document.write( "Error: Invalid operation.");
//     }
//     console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
// }

// let txt = document.getElementsByClassName("para")
// for (let i = 0; i < 6; i++) {
//     if (i == 0) {
//         txt[i].style.color = "red"
//     } else if (i == 1) {
//         txt[i].style.color = "blue"
//     }else if (i == 2) {
//         txt[i].style.color = "green"
//     }else if (i == 3) {
//         txt[i].style.color = "yellow"
//     }else if (i ==4) {
//         txt[i].style.color = "purple"
//     }else if (i == 5) {
//         txt[i].style.color = "orange"
//     }
//     else{
//         txt[i].style.color = "black"
//     }
// }


// let arr = ["red", "blue", "green", "purple", "gray", "brown"]
// let txt = document.getElementsByClassName("para")
// for (let i = 0; i < txt.length; i++) {
//         txt[i].style.backgroundcolor = arr[i % arr.length];
// }

let arr = ["red","blue","green","purple","gray","brown"]
let txt = document.getElementsByClassName("para")
function onclickfun(){
        for (let i = 0; i < txt.length; i++){
                txt[i].style.color="white";
                txt[i].style.background=arr[i%arr.length];
        }
}
