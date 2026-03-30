const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;

    const operators = ["+", "-", "*", "/", "%"];
    if (operators.includes(input) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }

}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expr = display.value.replace('%', '/100');
        display.value = eval(expr);
    } catch (error) {
        display.value = "Error";
    }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value) {
        display.value = String(eval(display.value) * -1);
    }
}


