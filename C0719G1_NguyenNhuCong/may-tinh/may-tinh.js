function show(pt) {
    let a = parseFloat(document.getElementById('so1').value);
    let b = parseFloat(document.getElementById('so2').value);
    switch (pt) {
        case "cong":
            let cong = (a + b);
            document.getElementById("ketqua").innerHTML = ("so tien doi ra la :" + cong);
            break;
        case"tru":
            let tru = (a - b);
            document.getElementById("ketqua").innerHTML = ("so tien doi ra la :" + tru);

            break;
        case "nhan":
            let nhan = (a * b);
            document.getElementById("ketqua").innerHTML = ("so tien doi ra la :" + nhan);
            break;
        case "chia":
            let chia = (a / b);
            document.getElementById("ketqua").innerHTML = ("so tien doi ra la :" + chia);
            break;
    }


}