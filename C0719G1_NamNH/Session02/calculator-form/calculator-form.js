function addition() {
    let firstNumber = parseInt(document.getElementById("first-number").value);
    let secondNumber = parseInt(document.getElementById("second-number").value);
    document.getElementById("display-result").innerHTML = "Result: " + (firstNumber + secondNumber);
}

function substraction() {
    let firstNumber = parseInt(document.getElementById("first-number").value);
    let secondNumber = parseInt(document.getElementById("second-number").value);
    document.getElementById("display-result").innerHTML = "Result: " + (firstNumber - secondNumber);
}

function multiplication() {
    let firstNumber = parseInt(document.getElementById("first-number").value);
    let secondNumber = parseInt(document.getElementById("second-number").value);
    document.getElementById("display-result").innerHTML = "Result: " + (firstNumber * secondNumber);
}

function division() {
    let firstNumber = parseInt(document.getElementById("first-number").value);
    let secondNumber = parseInt(document.getElementById("second-number").value);
    document.getElementById("display-result").innerHTML = "Result: " + (firstNumber / secondNumber);
}