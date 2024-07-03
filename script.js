let firstNumber;
let secondNumber;
let operator;
let isResettable = true;
const displayNode = document.querySelector("#display");

function resetGlobalVars(){
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    isResettable = true;
}

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(operator, num1, num2){
    if(operator === "+"){
        return add(num1, num2);
    }else if(operator === "-"){
        return subtract(num1, num2);
    }else if(operator === "*"){
        return multiply(num1, num2);
    }else if(operator === "/"){
        return divide(num1, num2);
    }
}

function populateDisplay(){
    const listOfNumberButtons = document.querySelectorAll(".number");

    for(let i = 0; i < listOfNumberButtons.length; i++){
        const currentNumberButton = listOfNumberButtons[i];
        currentNumberButton.addEventListener("click", () => {
            if(isResettable){
                displayNode.textContent = currentNumberButton.textContent;
                isResettable = false;
            }else {
                displayNode.textContent += currentNumberButton.textContent;
            }
        });
    }

    updateFirstNumber();
    updateEqualsButton();
}

function updateFirstNumber(){
    const listOfOperatorButtons = document.querySelectorAll(".operator");
    for(let i = 0; i < listOfOperatorButtons.length; i++){
        const operatorButton = listOfOperatorButtons[i];
        operatorButton.addEventListener("click", () => {
            if(firstNumber !== undefined){
                finishCalculation();
                firstNumber = undefined;
            }

            firstNumber = Number(displayNode.textContent);
            operator = operatorButton.textContent;
            isResettable = true;
        });
    }
}

function updateEqualsButton(){
    const equalsButton = document.querySelector("#equals-button");
    equalsButton.addEventListener("click", finishCalculation);
}

function finishCalculation(){
    if(firstNumber !== undefined && operator !== undefined){
        secondNumber = Number(displayNode.textContent);
        displayNode.textContent = operate(operator, firstNumber, secondNumber);
        resetGlobalVars();
    }
}

function addDecimalButton(){
    const decimalButton = document.querySelector("#decimal-button");
    decimalButton.addEventListener("click", () => {
        if(displayNode.textContent == firstNumber){
            displayNode.textContent = "0.";
            isResettable = false;
        }else if(!displayNode.textContent.includes(".")){
            displayNode.textContent += ".";
            isResettable = false;
        }
    });
}

populateDisplay();
addDecimalButton();