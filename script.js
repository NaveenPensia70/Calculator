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
let result
let storeOperator="";

//trying approach of considering 2 operands by storing them in different variable
let firstNumber=null;
let secondNumber=null;
let operator=null;
function getExpression(){
    let completeNumber="";
    numberButton.forEach(numb)
    {
        numb.addEventListener("click",function(event){
            console.log("Number button is clicked.");
            const numberValue=event.target.textContent;
            completeNumber+=numberValue;
            displayContent.textContent=completeNumber;
        })
    }
    operatorButton.addEventListener("click",function(event){
            operator=event.target.textContent.trim();
            firstNumber=parseFloat(completeNumber);
            completeNumber="";
    })
    equalsBtn.addEventListener("click",function(event){
            secondNumber=completeNumber;
            operator=event.target.textContent;
            if(!isNaN(firstNumber) && !isNaN(secondNumber))
            {
                switch(operator){
                case '+':
                    result=firstNumber + secondNumber;
                }
            }
    })
}
getExpression();

//created getNumbers() to take first operands as input
// function getNumbers(){
//     let storeNumber=" ";
//     let completeNumber=" ";
//     allButtons.forEach(function(buttons){
//     buttons.addEventListener('click',function(event){
//         storeNumber=event.target.textContent;
//         completeNumber=completeNumber+storeNumber;
//         stringNumberArray=completeNumber.split(/[+-/*%=]/);
//         console.log(stringNumberArray);
//         stringNumberArray.map(function(number){
//             displayContent.textContent=number;
//         })
//         numberArray=stringNumberArray.map(Number);
//     });
// });
// }
// getNumbers();


//now first i am creating functions for add, subtract, multiply and divide
// function getOperator(){
//     operatorButton.forEach(function(opButtons){
//     opButtons.addEventListener('click',function(event){
//     // result=numberArray.reduce(function(total,current){
//     //     return total+current;
//     storeOperator=event.target.textContent.trim();
//     console.log(storeOperator);
//     },);
// })
// }

// getOperator();
// function equals(){
//     equalsBtn.addEventListener('click',function(){
//         // console.log("Store operator inside equals function: ",storeOperator);
//         // console.log("Comparison result",storeOperator=='+')
//         if(storeOperator=='+')
//         {
//             // console.log("inside if");
//         result=numberArray.reduce(function(total,current){
//         return total+current;
//             });
//             console.log(result);
//         }
//         if(storeOperator=='-')
//             {
//                 // console.log("inside if");
//             result=numberArray.reduce(function(total,current){
//             return total-current;
//                 });
//                 console.log(result);
//             }
//             else if(storeOperator=='*')
//                 {
//                     // console.log("inside if");
//                 result=numberArray.reduce(function(total,current){
//                 return total*current;
//                     },1);
//                     console.log(result);
//                 }
//                 else if(storeOperator=='/')
//                     {
//                         // console.log("inside if");
//                     result=numberArray.reduce(function(total,current){
//                     return total/current;
//                         },1);
//                         console.log(result);
//                     }
//                     else if(storeOperator=='%')
//                         {
//                             // console.log("inside if");
//                         result=numberArray.reduce(function(total,current){
//                         return total%current;
//                             },1);
//                             console.log(result);
//                         }
        
        
//     });
// };
// equals();

// function subtract(num1,num2){
//     return num1-num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function modulus(num1,num2){
//     return num1%num2;

// }





