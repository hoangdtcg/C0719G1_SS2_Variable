function show() {
    let Vatly=parseInt(document.getElementById('vatly').value);
    let Hoahoc=parseInt(document.getElementById('hoahoc').value);
    let Sinhhoc=parseInt(document.getElementById('sinhhoc').value);
    let Total=Vatly + Hoahoc + Sinhhoc;
    let Medium=Total/3;
    document.getElementById('medium').innerHTML="Diem TB: " + Medium;
    document.getElementById('total').innerHTML="Total: " + Total;
}
function convert() {
    let Celsius=parseInt(document.getElementById('celsius').value);
    let Fahren=Celsius*9/5+32;
    document.getElementById('fahren').innerHTML="Result 0F: " + Fahren;
}
function sc() {
    let Bankinh=parseInt(document.getElementById('r').value);
    let Chuvi= Bankinh*2*3.14;
    let Dientich=Bankinh*Bankinh*3.14;
    document.getElementById('chuvi').innerHTML="Chu vi: " + Chuvi;
    document.getElementById('dientich').innerHTML="Dien tich: " + Dientich;
}