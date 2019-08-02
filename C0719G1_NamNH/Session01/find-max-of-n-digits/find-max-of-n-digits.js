let listNumber = [];
let thresholdNumber = parseInt(prompt("Input n: "))
let maximumNumber = 0;
for (let i = 0; i < thresholdNumber; i++) {
    let numberToAdd = parseInt(prompt("Input number " + (listNumber.length + 1) + ": "));
    listNumber.push(numberToAdd);
    if (listNumber[0] > listNumber[i]) {
        maximumNumber = listNumber[0];
    }
    if(listNumber[i] > maximumNumber) {
        maximumNumber = listNumber[i];
    }
}
alert("Maximum number = " + maximumNumber);
