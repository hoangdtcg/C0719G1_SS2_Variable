function show() {
    let toan;
    let ly;
    let hoa;

    toan = prompt("moi ban nhap do diem toan");
    ly = prompt("moi ban nhap diem ly");
    hoa = prompt("moi ban nhap diem hoa");
    toan = parseInt(toan);
    ly = parseInt(ly)
    hoa = parseInt(hoa);
    if (toan < 0 || hoa < 0 || ly < 0)
    {
        document.write("so ban nhap khong dung");

    }
    else {
        let tb;
        tb = (toan + ly + hoa) / 3;
        document.write("diem trung binh la : " + tb);

    }
}

