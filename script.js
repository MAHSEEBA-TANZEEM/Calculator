let currentNumber = ''; 
let previousNumber = ''; 
let operation = null;

function appendNumber(number) { 
    if (currentNumber.includes('.') && number === '.') return; 
    currentNumber += number; 
    updateDisplay();
}

function appendDecimal() { 
    if (!currentNumber.includes('.')) { 
        currentNumber += '.'; 
    } 
    updateDisplay();
}

function chooseOperation(op) { 
    if (currentNumber === '') return; 
    if (previousNumber !== '') { 
        calculateResult(); 
    } 
    operation = op; 
    previousNumber = currentNumber; 
    currentNumber = '';
}

function clearDisplay() { 
    currentNumber = ''; 
    previousNumber = ''; 
    operation = null; 
    updateDisplay();
}

function updateDisplay() { 
    document.getElementById('display').value = currentNumber;
}

function calculateResult() { 
    let computation; 
    const prev = parseFloat(previousNumber); 
    const current = parseFloat(currentNumber); 
    if (isNaN(prev) || isNaN(current)) return; 
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
    currentNumber = computation.toString(); 
    operation = null; 
    previousNumber = ''; 
    updateDisplay();
}
