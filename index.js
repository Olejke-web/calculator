var display = document.querySelector('.calculator .display');


function clearInput() {
    display.value = ""
}

var memory = "";


document
    .querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;

}

document
    .querySelectorAll('.opers button')
    .forEach(oper => oper.addEventListener('click', operPressed));

function operPressed(ev) {
    if (isNaN(display.value[display.value.length - 1])) {
        display.value = display.value.substr(0, display.value.length - 1)
    }

    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    display.value = eval(display.value);

    if (display.value === "Infinity") {
        alert("You can't divide by 0");
        clearInput();
    }
}
