let displayContent=document.querySelector(".display-content");
//Creation of variables for buttons in calculator
let numberButton=document.querySelectorAll(".number-button")
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


//trying if-else loop to display the number clicked
function displayNumber(){
numberButton.forEach(function(buttons){
    buttons.addEventListener('click',function(event){
        let storeNumber=" ";
        storeNumber.concat(event.target.textContent);
        displayContent.textContent=storeNumber;       
    });
});
}
displayNumber();



