// number to be stored as display
let displayNumber = 0;
// number to be operated on
let operandNumber;
// number to operate
let operatorNumber;
// current operator
let operator;
//stored number
let storedNumber;
//last button pressed stored
let pressed;
//final answer
let finalAnswer;

// when the window loads displays our default value 0 in our calc window
window.onload = () => {
    document.getElementById(display);
    display.textContent= displayNumber;
}

// function to do math
operate = (operator, storedNumber, displayNumber) => {
if
            storedNumber + Number(displayNumber);
            storedNumber - Number(displayNumber);
            storedNumber * Number(displayNumber);
            storedNumber / Number(displayNumber);
    

}

//takes a number and adds it to the display
//will clear if display is currently at 0
//stops accepting numbers after 10 digits reached
numberPress = (value) => {
    pressed = value.toString();
if (displayNumber  < 1){
    displayNumber = pressed.toString();
}
else if(displayNumber.length <10) {
    displayNumber = displayNumber.toString() + pressed.toString();
}

    console.log(pressed);
    console.log(displayNumber);
    document.getElementById(display);
    display.textContent= displayNumber;
    

}
// AC button clears
allClear = () => {
    storedNumber = undefined;
    operandNumber = undefined;
    operatorNumber = undefined;
    storedNumber = undefined;
    pressed = undefined;
    operator = undefined;
    displayNumber = 0;
    document.getElementById(display);
    display.textContent= displayNumber;
}

pressOperator = (value) =>{
    storedNumber = Number(displayNumber);
    displayNumber = Number(0);
    operator = value;
    console.log(storedNumber);
    console.log(displayNumber);
    console.log(operator);
}