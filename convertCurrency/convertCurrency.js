function chuyendoitien(){
    let stien = document.getElementById('sotien').value;
    let fr = document.getElementById('from').value;
    let t = document.getElementById('to').value;
    let result = (stien * t) / fr;
    document.write("=  " + result);
}