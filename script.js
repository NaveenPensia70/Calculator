let displayContent=doxument.querySelector(".display");
//Creation of variables for buttons in calculator
let zeroBtn=document.querySelector("#zero");
let oneBtn=document.querySelector("#one");
let twoBtn=document.querySelector("#two");
let threeBtn=document.querySelector("#three");
let fourBtn=document.querySelector("#four");
let fiveBtn=document.querySelector("#five");
let sixBtn=document.querySelector("#six");
let sevenBtn=document.querySelector("#seven");
let eightBtn=document.querySelector("#eight");
let nineBtn=document.querySelector("#nine");
let acBtn=document.querySelector("#AC");
let plusminusBtn=document.querySelector("#plus-minus");
let modulusBtn=document.querySelector("#modulus");
let divideBtn=document.querySelector("#divide");
let multiplyBtn=document.querySelector("#multiply");
let minusBtn=document.querySelector("#minus");
let plusBtn=document.querySelector("#plus");
let fractionBtn=document.querySelector("#fraction");
let backspaceBtn=document.querySelector("#backspace");
let equalsBtn=document.querySelector("#equals");


//Adding eventListener so that the number clicked will be displayed
zeroBtn.addEventListener('click',displayZero);
function displayZero(){
 displayContent.textContent="0";
}