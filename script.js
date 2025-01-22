let currentOperation = '';
let previousOperand = '';
let currentOperand = '';

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = '';
    updateDisplay();
}

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    currentOperation = operation;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    currentOperation = '';
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentOperand;
}
