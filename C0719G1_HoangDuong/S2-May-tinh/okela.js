function setOutput(value) {
    document.getElementById("output").value += value;
}

function result() {
    let output = document.getElementById("output").value;
    document.getElementById("output").value = eval(output);
}

function clearOutput() {
    document.getElementById("output").value = '';
}

