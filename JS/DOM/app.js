let ince =document.getElementById("inc");
let decr =document.getElementById("dec");
let code =document.getElementById("num");
let price =document.getElementById("price");

let e = 0;
let f = 500;

ince.addEventListener('click', function(){
    if(e>1){
        e--;
        code.innerHTML =e
    }
})