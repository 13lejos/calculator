// number to be stored as display
let displayNumber = 0;
// number to be operated on
let operandNumber;
// number to operate
let operatorNumber;
// current operator
let operator;
//stored number/answer
let storedNumber;
//last button pressed stored
let pressed;

window.onload = () => {
    document.getElementById(display);
    display.textContent= displayNumber;
}


operate = (operandNumber, operatorNumber) => {
storedNumber = operandNumber + operator + operatorNumber;
}

numberPress = (value) => {
    pressed = value.toString();
if (displayNumber  < 1){
    displayNumber = pressed.toString();
}
else{
    displayNumber = displayNumber.toString() + pressed.toString();
}

    console.log(pressed);
    console.log(displayNumber);
    document.getElementById(display);
    display.textContent= displayNumber;

}

allClear = () => {
    storedNumber = undefined;
    displayNumber = 0;
    document.getElementById(display);
    display.textContent= displayNumber;
}