function cong(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    c = a + b;
    document.getElementById("ketqua").innerHTML = c;
}
function tru(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    c = a - b;
    document.getElementById("ketqua").innerHTML = c;
}
function nhan() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    c = a * b;
    document.getElementById("ketqua").innerHTML = c;
}
function chia() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    c = a / b;
    document.getElementById("ketqua").innerHTML = c;

}