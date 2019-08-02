let firstNumber = parseInt(prompt("Input first number: "));
let secondNumber = parseInt(prompt("Input second number: "));
let thirdNumber = parseInt(prompt("Input third number: "));
let maximumNumber = 0;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    maximumNumber = firstNumber;
}
if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    maximumNumber = secondNumber
} else {
    maximumNumber = thirdNumber;
}

alert("Maximum number = " + maximumNumber)
