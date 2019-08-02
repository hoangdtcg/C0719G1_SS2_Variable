    let x =document.getElementById('numb1');
    let y = document.getElementById('numb2');
function addition() {
    let add = parseInt(x.value) +parseInt(y.value);
    document.getElementById("result").innerHTML =  parseInt(x.value) + " + " + parseInt(y.value) + " = " + add;
}

function subtraction() {
    let sub = parseInt(x.value) - parseInt(y.value);
    document.getElementById("result").innerHTML = "Result Subtraction : " + sub;
}

function Multipilcaton() {
    let mul = parseInt(x.value) * parseInt(y.value);
    document.getElementById("result").innerHTML = "Result Multiplication : " + mul;
}

function Division() {
    if(parseInt(y.value) == 0){
        alert("Error. Second number must not be 0. Please try again !!")
    } else {
        let div = parseInt(x.value) / parseInt(y.value);
        document.getElementById("result").innerHTML = "Result Division : " + div;
    }
}