let currentInput = '0';
let previousInput = '';
let operation = null;
let resetInput = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || resetInput) {
        currentInput = number;
        resetInput = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    resetInput = true;
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentInput = computation.toString();
    operation = null;
    resetInput = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

// Initialize display
updateDisplay();