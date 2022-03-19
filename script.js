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
function percent(x, y) {
    return x * (y / 100);
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
        case '%':
            result = percent(operand1, operand2);
        default:
            console.log('No operator found');
    }
    return result;
}
function displayValue(btnValue) {
    if (checkValueLength(display.textContent)) {
        alert('Value length limit has been reached');
        return;
    }
    display.textContent += btnValue;
    currentValue = display.textContent;
}
function displayOperator(operator) {
    if (currentValue.includes('+') || currentValue.includes('-') || currentValue.includes('x') || currentValue.includes('/') || currentValue.includes('%')) {
        let expression = currentValue.split(`${currentOperator}`);
        if (expression[1] !== '') {
            expression = expression.map(item => Number(item));
            display.textContent = operate(currentOperator, expression[0], expression[1]) + operator;
            currentValue = display.textContent;
            currentOperator = operator;
        } else {
            display.textContent = expression[0] + operator;
            currentValue = display.textContent;
            currentOperator = operator;
        }
    } else {
        display.textContent += operator;
        currentValue = display.textContent;
        currentOperator = operator;
    }
}
function calculate() {
    let expression = currentValue.split(`${currentOperator}`);
    if (expression.length > 1) {
        if (expression[1] !== '') {
            expression = expression.map(item => Number(item));
            display.textContent =  operate(currentOperator, expression[0], expression[1]);
            currentValue = display.textContent;
        } else {
            display.textContent = expression[0] + currentOperator;
            currentValue = display.textContent;
        }
    } else {
        display.textContent = expression[0];
        currentValue = display.textContent;
    }
}
function clear() {
    let expression = currentValue.split('');
    expression.pop();
    display.textContent =  arrayToString(expression);
    currentValue = display.textContent;
}
function arrayToString(arr) {
    let myString = '';
    for (let item in arr) {
        myString += arr[item];
    }
    return myString;
}
function clearAll() {
    display.textContent = '';
    currentValue = display.textContent;
}
function checkValueLength(value) {
    if (value.length >= 18) return true;
    return false;
}
// Global Variables
let currentValue;
let currentOperator;
const display = document.querySelector('.display');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const clearSingleBtn = document.querySelector('#clear-single');
const clearAllBtn = document.querySelector('#clear-all');

numberBtn.forEach(btn => btn.addEventListener('click', () => (displayValue(btn.textContent))));
operatorBtn.forEach(btn => btn.addEventListener('click', () => (displayOperator(btn.textContent))));
equalsBtn.addEventListener('click', calculate);
clearSingleBtn.addEventListener('click', clear);
clearAllBtn.addEventListener('click', clearAll);