function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let expression = document.getElementById('result').value;
    let result = eval(expression);
    document.getElementById('result').value = result;
}

function clearScreen() {
    document.getElementById('result').value = '';
}


