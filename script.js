let currentInput = '';
let num1 = null;
let num2 = null;
let operation = null;

function appendNumber(num) {
    if (currentInput.length < 10) {
        currentInput += num;
        updateDisplay(currentInput);
    }
}

function setOperation(op) {
    if (currentInput !== '') {
        num1 = parseFloat(currentInput);
        operation = op;
        currentInput = '';
        updateDisplay('0');
    }
}

function calculate() {
    if (num1 !== null && currentInput !== '') {
        num2 = parseFloat(currentInput);
        let result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error';
                break;
        }
        updateDisplay(result);
        currentInput = result.toString();
        num1 = null;
        num2 = null;
        operation = null;
    }
}

function clearDisplay() {
    currentInput = '';
    num1 = null;
    num2 = null;
    operation = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}