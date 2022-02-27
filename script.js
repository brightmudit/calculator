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
        case '*':
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