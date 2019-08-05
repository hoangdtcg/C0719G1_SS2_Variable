function show(){
let year = parseInt(prompt(" moi ban nhap so nam"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert('nam ban nhap la nam nhuan')        }
        else {
        alert(" nam ban nhap khong  la nam nhuan")
        }
    }
    else {
        alert('nam ban nhap la nam nhuan')    }
}
    else {
        alert(" nam ban nhap khong  la nam nhuan")
}
}