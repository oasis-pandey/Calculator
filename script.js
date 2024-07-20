const display = document.getElementById("display");

function appendToDisplay(content) {
    display.value += content;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        var result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = "error";
    }
}

function correct() {
    if (display.value.length > 1) {
        var sliced = display.value.slice(0, -1);
        display.value = sliced;
    } else {
        display.value = '';
    }
}

