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
// text for the display
let displayText;

// when the window loads displays our default value 0 in our calc window
window.onload = () => {
    document.getElementById(display);
    display.textContent= displayNumber;
}

// function to do math
operate = (x, a, b) => {
a = Number(storedNumber);
b = Number(displayNumber);
x = operator;

if( operator === '+'){
    finalAnswer = Number(storedNumber + displayNumber);
    console.log(finalAnswer);
}
else if( operator === '-'){
    finalAnswer = Number(storedNumber - displayNumber);
    console.log(finalAnswer);
}
else if(operator === 'x'){
    finalAnswer = Number(storedNumber * displayNumber);
    console.log(finalAnswer);
}

else if( operator === '/' && displayNumber !==0){
    finalAnswer = Number(storedNumber / displayNumber);
    console.log(finalAnswer);
}
else{
    document.getElementById(display);
    display.textContent= 'error';
}


    storedNumber = finalAnswer
    document.getElementById(display);
    display.textContent= Math.round(finalAnswer * 10) / 10;


}

//takes a number and adds it to the display
//will clear if display is currently at 0
//stops accepting numbers after 10 digits reached
numberPress = (value) => {
    pressed = value;
if (displayNumber < 1){
    displayNumber = Number(pressed);
}
else{
    displayNumber = Number(displayNumber.toString() + pressed.toString());
}

    console.log(pressed);;
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
if(storedNumber === undefined){


    storedNumber = Number(displayNumber);
    displayNumber = Number(0);
    operator = value;
    console.log(storedNumber);
    console.log(displayNumber);
    console.log(operator);
}
else{
        displayNumber = Number(0);
    operator = value;
    console.log(storedNumber);
    console.log(displayNumber);
    console.log(operator);
}
}