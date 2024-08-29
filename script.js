let displayContent=document.querySelector(".display-content");
//Creation of variables for buttons in calculator
let numberButton=document.querySelectorAll(".number-button")
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
// zeroBtn.addEventListener('click',displayZero);
// function displayZero(){
//  displayContent.textContent="0";
// }
// oneBtn.addEventListener('click',displayOne);
// function displayOne(){
//  displayContent.textContent="1";
// }
// twoBtn.addEventListener('click',displayTwo);
// function displayTwo(){
//  displayContent.textContent="2";
// }
// threeBtn.addEventListener('click',displayThree);
// function displayThree(){
//  displayContent.textContent="3";
// }
// fourBtn.addEventListener('click',displayFour);
// function displayFour(){
//  displayContent.textContent="4";
// }
// fiveBtn.addEventListener('click',displayFive);
// function displayFive(){
//  displayContent.textContent="5";
// }
// sixBtn.addEventListener('click',displaySix);
// function displaySix(){
//  displayContent.textContent="6";
// }
// sevenBtn.addEventListener('click',displaySeven);
// function displaySeven(){
//  displayContent.textContent="7";
// }
// eightBtn.addEventListener('click',displayEight);
// function displayEight(){
//  displayContent.textContent="8";
// }
// nineBtn.addEventListener('click',displayNine);
// function displayNine(){
//  displayContent.textContent="9";
// }

// button click{
//     button obj=x_button clicked;
//     if button obj==0{
//         textContent="0";
//     }
//}

//trying if-else loop to display the number clicked
function displayNumber(){
numberButton.forEach(function(buttons){
    buttons.addEventListener('click',function(event){
        let storeNumber;
        storeNumber=buttons.textContent;
        if (storeNumber==0)
            {
               displayContent.textContent=storeNumber;
            }
           else if (storeNumber==1)
               {
                  displayContent.textContent=1;
               }
           else if (storeNumber==2)
               {
                  displayContent.textContent=2;
               }
            else if (storeNumber==3)
                {
                   displayContent.textContent=3;
               }
               else if (storeNumber==4)
                   {
                      displayContent.textContent=4;
                  }
                  else if (storeNumber==5)
                   {
                      displayContent.textContent=5;
                  }
                  else if (storeNumber==6)
                   {
                      displayContent.textContent=6;
                  }
                  else if (storeNumber==7)
                   {
                      displayContent.textContent=7;
                  }
                  else if (storeNumber==8)
                   {
                      displayContent.textContent=8;
                  }
                  else if (storeNumber==9)
                   {
                      displayContent.textContent=9;
                  }
    });
});

 

}


