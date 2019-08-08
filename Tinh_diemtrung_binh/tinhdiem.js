let diemToan = parseFloat(prompt("Diem mon Toan : "));
let diemLy   = parseFloat(prompt("Diem mon Ly :"));
let diemHoa  = parseFloat(prompt("Diem mon Hoa"));
let diemTong = diemToan + diemLy + diemHoa;
let diemTB   = diemTong/3;
    document.write("Tong diem 3 mon: " +diemTong+ "diem Trung Binh 3 mon: " +diemTB);