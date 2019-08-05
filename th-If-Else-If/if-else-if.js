function dangnhap()
{
    let tk =(document.getElementById('tendangnhap').value);
    let mk=(document.getElementById('matkhau').value);

    if (tk=='admin') {
        if(mk=='admin'){
            document.getElementById('tk').innerHTML= 'chao mung ban dang nhap thanh cong';
        }
        else if (mk==""){
            document.getElementById('tk').innerHTML="moi ban nhap lai mat khau"
        }
        else {
            document.getElementById('tk').innerHTML='tai khoan hoac mat khau khong dung'
        }

    }
    else if (tk==""){
        document.getElementById("tk").innerHTML="moi ban nhap lai tai khoan dang nhap"

    }
    else {
        document.getElementById('tk').innerHTML="tai khoan hoac mat khau khong dung"
    }

   }
