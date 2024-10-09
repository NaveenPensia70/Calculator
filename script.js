let displayContent=document.querySelector(".display-content");
//Creation of variables for buttons in calculator
let numberButton=document.querySelectorAll(".number-button");
let operatorButton=document.querySelectorAll(".operator-button");
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
let allButtons=document.querySelectorAll("button");
let stringNumberArray=[];
let numberArray=[];
let result;
let storeOperator="";

//trying approach of considering 2 operands by storing them in different variable
let firstNumber=null;
let secondNumber=null;
let operator=null;
function getExpression(){
    let completeNumber="";
    numberButton.forEach(function(numbers){
    {
        numbers.addEventListener("click",function(event){
            console.log("Number button is clicked.");
            const numberValue=event.target.textContent;
            completeNumber+=numberValue;
            displayContent.textContent=completeNumber;
        })
    }})
    operatorButton.forEach(function(operators)
    {
    operators.addEventListener("click",function(event){
        console.log("Operator clicked");
            operator=event.target.textContent.trim();
            firstNumber=parseFloat(completeNumber);
            completeNumber="";
            console.log(operator);
    })
})
    equalsBtn.addEventListener("click",function(event){
        console.log("Equal button clicked");
            secondNumber=parseFloat(completeNumber);
            // operator=event.target.textContent;
            // console.log(operator);
            if(!isNaN(firstNumber) && !isNaN(secondNumber))
            {
                console.log("inside if");
                switch(operator){
                case '+':
                    result=firstNumber + secondNumber; 
                    break;
                case '-':
                    result=firstNumber - secondNumber;
                    break;
                case '*':
                    result=firstNumber * secondNumber;
                    break;
                case '/':
                    result= firstNumber / secondNumber;
                    break;
                case '%':
                    result=firstNumber % secondNumber;
                    break;
                case 'AC':
                    // console.log("Hi AC");
                    firstNumber=NULL;
                    secondNumber=NULL;
                    operator=NULL;
                    result=0;
                    displayContent.textContent=0;
                    break;
                }
            }
          displayContent.textContent=result;  
    })
}
getExpression();






