let firstNumber;
let secondNumber;
let operator;
let isResettable = true;
const displayNode = document.querySelector("#display");

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
}

function updateFirstNumber(){
    const listOfOperatorButtons = document.querySelectorAll(".operator");
    for(let i = 0; i < listOfOperatorButtons.length; i++){
        const operatorButton = listOfOperatorButtons[i];
        operatorButton.addEventListener("click", () => {
            firstNumber = Number(displayNode.textContent);
            operator = operatorButton.textContent;
            isResettable = true;
        });
    }
}

function completeCalculation(){
    const equalsButton = document.querySelector("#equals-button");
    equalsButton.addEventListener("click", () => {
        secondNumber = Number(displayNode.textContent);
        displayNode.textContent = operate(operator, firstNumber, secondNumber);
        isResettable = true;
    });
}

populateDisplay();
updateFirstNumber();
completeCalculation();