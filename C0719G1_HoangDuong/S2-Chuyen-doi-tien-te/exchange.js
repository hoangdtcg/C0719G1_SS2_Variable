function exchangemoney() {

    let x = parseInt(document.getElementById("numb").value);

    let y = parseInt(document.getElementById("s1").value);

    let z = parseInt(document.getElementById("s2").value);

    let k = x * z / y;
    document.getElementById("result").innerHTML = "Ket qua la : " + k + document.getElementById("s1").name;
}