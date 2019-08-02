

function add() {
    let Number1=parseInt(document.getElementById('number1').value);
    let Number2=parseInt(document.getElementById('number2').value);

    let Add=Number1+Number2;
    document.getElementById('result').innerHTML="Result Addition: " + Add;
}
function sub() {
    let Number1=parseInt(document.getElementById('number1').value);
    let Number2=parseInt(document.getElementById('number2').value);
    let Sub=Number1-Number2;
    document.getElementById('result').innerHTML="Result Subtration: " + Sub;
}
function multi() {
    let Number1=parseInt(document.getElementById('number1').value);
    let Number2=parseInt(document.getElementById('number2').value);
    let Multi=Number1*Number2;
    document.getElementById('result').innerHTML="Result Multiplication: " + Multi;
}
function divi() {
    let Number1=parseInt(document.getElementById('number1').value);
    let Number2=parseInt(document.getElementById('number2').value);
    let Divi=Number1/Number2;
    document.getElementById('result').innerHTML="Result Division: "+ Divi;

}
