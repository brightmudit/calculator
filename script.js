function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function operate(operator, operand1, operand2) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(operand1, operand2);
            break;
        case '-':
            result = sub(operand1, operand2);
            break;
        case 'x':
            result = mul(operand1, operand2);
            break;
        case '/':
            result = div(operand1, operand2);
            break;
        default:
            console.log('No operator found');
    }
    return result;
}
function displayValue(btnValue) {
    display.textContent += btnValue;
    currentValue = display.textContent;
}
function displayOperator(operator) {
    display.textContent += operator;
    // firstValue = Number(currentValue);
    // currentValue = 0;
    currentOperator = operator;
}
function calculate() {
    let expression = currentValue.split(`${currentOperator}`);
    expression = expression.map(item => Number(item));
    // secondValue = Number(currentValue);
    display.textContent =  operate(currentOperator, expression[0], expression[1]);
}
// Global Variables
let currentValue = 0;
// let firstValue = 0;
// let secondValue = 0;
let currentOperator;
const display = document.querySelector('.display');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');

numberBtn.forEach(btn => btn.addEventListener('click', () => (displayValue(btn.textContent))));
operatorBtn.forEach(btn => btn.addEventListener('click', () => (displayOperator(btn.textContent))));
equalsBtn.addEventListener('click', calculate);

