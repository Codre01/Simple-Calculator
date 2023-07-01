//create function to input numbers and symbols
//create equal sign function for evaluation of inputs
//create del and clear function

//Get the input id and declare it as a varible 
let display = document.getElementById("result");

//Joining all inputs together
const inputingValue = (value) => {
    display.value += value;
};

//Evaluation of the inputs using equal sign
const evaluateAllInputs = () => {
    let typedInput = display.value;
    let calculatedResult = eval(typedInput);
    display.value = calculatedResult;
};

//Clearing all inputs at the same time
const clearAllValues = () => {
    display.value = "";
};

//Deleting every lastindex input
const removeLastValue = () => {
    let remainingValues = display.value.substring(0, display.value.length - 1);
    display.value = remainingValues;
};

//to change positive number to negative and vice versa
const negativeNumber = () => {
    let negativeResult = eval(display.value * -1);
    display.value = negativeResult;
}

//to calculate Square Root of a number
const calculateSquareroot = () => {
    let SquareRoot = eval(Math.sqrt(display.value));
    display.value = SquareRoot;
};
