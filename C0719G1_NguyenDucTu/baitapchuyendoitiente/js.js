function calculator(){
    let a = document.getElementById("a").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let sotien = parseInt(a);

    let outputketqua;

    if (sotien == 0 || sotien == null || a == " ") {
        document.getElementById("ketqua").innerHTML = "Mời bạn nhập số tiền";
    } else {
        let b = parseInt(from);
        let c = parseInt(to);
        outputketqua = (sotien * c) / b;
        document.getElementById("ketqua").innerHTML = outputketqua;
    }
}

