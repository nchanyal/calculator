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
    return number2 === 0 ? "nice try" : number1 / number2;
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
            }else if(displayNode.textContent !== "0" || 
                currentNumberButton.textContent !== "0") {
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

function addClearButton(){
    const clearButton = document.querySelector("#clear-button");
    clearButton.addEventListener("click", () => {
        resetGlobalVars();
        displayNode.textContent = "0";
    });
}

function addChangeSignButton(){
    const changeSignBtn = document.querySelector("#change-sign-button");
    changeSignBtn.addEventListener("click", () => {
        if(displayNode.textContent !== "0"){
            if(displayNode.textContent.includes("-")){
                displayNode.textContent = displayNode.textContent.replace("-", "");
            }else {
                displayNode.textContent = "-" + displayNode.textContent;
            }
        }
    });
}

function addPercentButton(){
    const percentBtn = document.querySelector("#percentage-button");
    percentBtn.addEventListener("click", () => {
        let percentage = String(Number(displayNode.textContent) / 100);

        if(percentage.length > 14){
            displayNode.textContent = percentage.slice(0, 12);
        }else {
            displayNode.textContent = Number(displayNode.textContent) / 100;
        }
    });
}

populateDisplay();
addDecimalButton();
addClearButton();
addChangeSignButton();
addPercentButton();