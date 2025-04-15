function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function mutiple(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function operate(num1, operator, num2){
    let num11=Number(num1);
    let num22=Number(num2);
    console.log(num11,num22);
    switch(operator){
        case '+':
            return add(num11,num22);
            
        case '-':
            return subtract(num11,num22);
            break;
        case 'x':
            return mutiple(num11,num22);
        case '/':
            return divide(num11,num22);
        default:
            return 0;
    }

}
let displayNum='0', inputOperator='+', valueOutput='0'; //value output should always be string

const buttons = document.querySelectorAll(".num");
const textDisplay = document.querySelector(".textDisplay");
textDisplay.textContent=displayNum;
buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        if(displayNum =='0') displayNum=button.textContent;
        else{
            if(displayNum.length <15) displayNum+=button.textContent;
        }
        textDisplay.textContent=displayNum;

        console.log(valueOutput,displayNum);
    })
});
const dotBut =document.querySelector(".dot");
dotBut.addEventListener('click', function(e){
    if(displayNum.length<14 && !displayNum.includes('.')) displayNum+='.';
    textDisplay.textContent=displayNum;
});


const operatorBut =document.querySelectorAll(".operator");
operatorBut.forEach(opeBut=>{
    opeBut.addEventListener('click', function(e){
        if(valueOutput =='0') valueOutput = displayNum;
        else{
            valueOutput = String(operate(valueOutput, inputOperator, displayNum));
            displayNum = valueOutput;
        }
        inputOperator=this.textContent;
        console.log(valueOutput,displayNum);
        
        textDisplay.textContent = valueOutput;
        displayNum ='0';
    });
})

const clearButton =document.querySelector("#clear");
clearButton.addEventListener('click', function(e){
    textDisplay.textContent ='0';
    displayNum ='0';
    valueOutput='0';
})