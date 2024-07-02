let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;

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
    const displayNode = document.querySelector("#display");
    currentNumberButton.addEventListener("click", () => {
        displayNode.textContent = currentNumberButton.textContent;
        displayValue = displayNode.textContent;
    });
}
}

populateDisplay();


console.log(operate("/", 6, 2));